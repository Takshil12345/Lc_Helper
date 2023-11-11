function displayProblems(problems) {
  const problemList = document.getElementById('problemList');
  problemList.innerHTML = ''; // Clear existing list

  problems.forEach((problem, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'problem-list-item';

    // Create a container div for the rounded box and dropdown
    const container = document.createElement('div');
    container.className = 'container';

    // Create a rounded box for the problem name
    const roundedBox = document.createElement('div');
    roundedBox.className = 'rounded-box';
    roundedBox.textContent = problem.problemName;

    // Create an anchor element with the problem name as the text content
    const anchor = document.createElement('a');
    anchor.textContent = problem.problemName;

    // Set the href attribute of the anchor element to the LeetCode problem URL
    anchor.href = `https://leetcode.com/problems/${problem.problemName}/`;

    // Make the link open in a new tab
    anchor.target = '_blank';

    // Create a dropdown list
    const dropdown = document.createElement('select');
    dropdown.id = `${problem.problemName}`;
    dropdown.className = 'status-dropdown';

    // Add options for each status
    const statusOptions = ['Solved', 'Unsolved', 'Revise'];
    statusOptions.forEach((status) => {
      const option = document.createElement('option');
      option.value = status;
      option.textContent = status;
      // Set the selected attribute for the current status
      if (status === problem.problemStatus) {
        option.selected = true;
      }
      dropdown.appendChild(option);
    });

    // Append the rounded box and dropdown to the container
    container.appendChild(roundedBox);
    container.appendChild(dropdown);

    // Append the container to the list item
    listItem.appendChild(container);

    // Append the list item to the problemList
    problemList.appendChild(listItem);
  });
}

export default displayProblems;