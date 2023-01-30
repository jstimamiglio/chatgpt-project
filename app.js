<script>
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Access the data here
      let output = '';
      data.forEach(function(job) {
        output += `
          <div class="job">
            <h2>${job.title}</h2>
            <p>${job.description}</p>
            <p>Location: ${job.location}</p>
          </div>
        `;
      });
      document.querySelector('#jobs').innerHTML = output;
    });
</script>