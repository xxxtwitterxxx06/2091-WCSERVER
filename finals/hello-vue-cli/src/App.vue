<template>
  <div class="resume">
  <div id="pic">
    <img :src="require('./assets/dp.jpg')"/>
  </div>
    <h1>{{ name }}</h1>
    <h3>{{ jobTitle }}</h3>
    <hr>
    <h4>Summary</h4>
    <p>{{ summary }}</p>
    <h4>Skills</h4>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
    <h4>Education</h4>
    <div v-for="education in educations" :key="education.school">
      <h5>{{ education.school }}</h5>
      <h6>{{ education.degree }}</h6>
      <p>{{ education.startDate }} - {{ education.endDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      name: "Lee, Miguel P.",
      jobTitle: "Web Developer",
      summary: "I am Miguel Lee from Holy Angel University. Currently 2nd year College taking Bachelor of Science in Web Development",
      skills: [
        "Web Designing",
        "Cooking",

      ],
      educations: [
        {
          school: "Bacolor Elementary School",
          degree: "Elementary",
          startDate: "2009",
          endDate: "2015",
        },
        {
          school: "San Vicente Pilot School for Philippine Craftsmen",
          degree: "High School",
          startDate: "June 2015",
          endDate: "2019",
        },
        {
          school: "Holy Angel University",
          degree: "Senior High School",
          startDate: "2019",
          endDate: "2021",
        },
        {
          school: "Holy Angel University",
          degree: "College",
          startDate: "2021",
          endDate: "2023",
        },
      ],
    };
  },
};
</script>

<style>
*{
  background-color: #D3D3D3;
}

img{
  width: 150px;
  height: 150px;
  padding: 20px;
  border-radius: 25px;
  margin: auto;
  float: left;
}
.resume {
  margin: 3rem;
}

.resume h1 {
  font-size: 5rem;
  margin: 0 0 0.5rem;
}

.resume h3 {
  font-size: 1.5rem;
  margin: 0 0 1rem;
}

.resume h4 {
  font-size: 1.25rem;
  margin: 1.5rem 0 0.5rem;
}

.resume h5 {
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
}

.resume h6 {
  font-size: 1rem;
  margin: 0 0 0.5rem;
}

.resume p {
  margin: 0;
}

.resume ul {
  list-style: disc;
  margin: 0;
  }

.resume li{
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
}
</style>