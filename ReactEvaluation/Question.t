roblem Statement
Create a React application that displays a feed of posts using the JSONPlaceholder API. Your application should demonstrate your understanding of React hooks, API integration, and component state management.

Requirements
1. Fetch and Display Posts
Use the JSONPlaceholder API endpoint: https://jsonplaceholder.typicode.com/posts
Display a list of posts on the page
Each post should show:
Post title
Post body/content
2. Display User Information
For each post, fetch the username of the author
Use the endpoint: https://jsonplaceholder.typicode.com/users/{userId}
Display the username in the bottom left corner of each post card
3. Comments Feature
Add a comment icon on each post (you can use any icon library or emoji)
The comment icon should be toggleable (clickable)
When clicked for the first time:
Fetch comments for that specific post using: https://jsonplaceholder.typicode.com/posts/{postId}/comments
Display the comments below the post
When clicked again:
Hide the comments (toggle functionality)
Comments should be displayed with proper indentation to visually separate them from the post content
4. Technical Requirements
Use React functional components
Use React hooks (useState, useEffect)
Handle loading states appropriately
Implement proper error handling
Make the UI responsive and visually appealing
Bonus Points
Add loading indicators while fetching data
Implement smooth animations for comment expansion/collapse
Style the application to look modern and clean
Show comment count on the comment icon
Optimize API calls (avoid fetching the same data multiple times)
Reference Design
Here's what your application should look like: 

Deliverables
A working React application that meets all the requirements
Clean, readable code with proper component structure
Proper error handling and loading states
API Endpoints to Use
Posts: https://jsonplaceholder.typicode.com/posts
Users: https://jsonplaceholder.typicode.com/users/{userId}
Comments: https://jsonplaceholder.typicode.com/posts/{postId}/comments
Evaluation Criteria
Correct implementation of all features
Code quality and organization
Proper use of React hooks
UI/UX design and responsiveness
Error handling and edge cases