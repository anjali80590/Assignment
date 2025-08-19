import cron from "cron";
import client from "../config/redis.js";
import User from "../models/User.js";
import transporter from "../config/email.js";
import PDFDocument from "pdfkit";
import fs from "fs";

export default new cron.CronJob("*/5 * * * * *", async () => {
  const keys = await client.keys("status:*");
  for (let key of keys) {
    const status = JSON.parse(await client.get(key));
    const user = await User.findById(status.userId);
    if (!user) continue;
    const filePath = `report_${status.userId}.pdf`;
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));
    doc.fontSize(18).text("Bulk Insertion Report", { align: "center" });
    doc.moveDown();
    doc.fontSize(14).text(`User ID: ${status.userId}`);
    doc.text(`Success: ${status.success}`);
    doc.text(`Failed: ${status.fail}`);
    doc.text(`Timestamp: ${status.timestamp}`);
    doc.end();
    await new Promise((r) => doc.on("finish", r));
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Bulk Books Report",
      text: "Attached is your bulk insertion report.",
      attachments: [{ filename: "report.pdf", path: filePath }],
    });
    fs.unlinkSync(filePath);
    await client.del(key);
  }
});
