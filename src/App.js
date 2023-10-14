import React from 'react';

function Portfolio() {
  const name = 'Tanmay Naik';
  const age = 20;
  const dob = '21/03/2003';
  const native = 'Surat, Gujarat';
  const school = 'Reliance Foundation School, Surat';
  const college = 'Vellore Institute of Technology, Chennai Campus';
  const cgpa = 8.26;
  const skills = 'Proficient in multiple programming languages, can build websites';

  return (
    <div className="portfolio">
      <header>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>DOB: {dob}</p>
        <p>Native: {native}</p>
      </header>
      <main>
        <section>
          <h2>Education</h2>
          <p>School: {school}</p>
          <p>College: {college}</p>
          <p>CGPA: {cgpa}</p>
        </section>
        <section>
          <h2>Skills</h2>
          <p>{skills}</p>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
