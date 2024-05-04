import React from 'react';
import './index.css'
// import Digital  from './first-sem/digital';

function Semnav(){
  return(
<>
<div className="navbar">

  <div className="dropdown">
      <a href="#">Sem 1</a>
      <div className="dropdown-content">
        <a href="./first-sem/digital.jsx">Computer Fundamentals Applications</a>
        <a href="digitallink">Society and Technology</a>
        <a href="/1st sem/html files/eng.html">English I</a>
        <a href="/1st sem/html files/math.html">Mathematics I</a>
        <a href="/1st sem/html files/digital.html">Digital Logic</a>
      </div>
  </div>

  <div className="dropdown">
    <a href="#">Sem 2</a>
    <div className="dropdown-content">
      <a href="#">C Programming</a>
      <a href="#">Financial Accounting</a>
      <a href="#">English II</a>
      <a href="#">Mathematics II</a>
      <a href="#">Microprocessor and Computer Architecture</a>
    </div>
</div>

<div className="dropdown">
  <a href="#">Sem 3</a>
  <div className="dropdown-content">
    <a href="#">Data Structures and Algorithms</a>
    <a href="#">Probability and Statistics</a>
    <a href="#">System Analysis and Design</a>
    <a href="#">OOP in Java</a>
    <a href="#">Web Technology</a>
  </div>
</div>

<div className="dropdown">
<a href="#">Sem 4</a>
<div className="dropdown-content">
  <a href="#">Operating System</a>
  <a href="#">Numerical Methods</a>
  <a href="#">Software Engineering</a>
  <a href="#">Scripting Language</a>
  <a href="#">Database Management System</a>
  <a href="#">Project I</a>
</div>
</div>

<div className="dropdown">
<a href="#">Sem 5</a>
<div className="dropdown-content">
<a href="#">MIS and E-Business</a>
    <a href="#">DotNet Technology</a>
    <a href="#">Computer Networking</a>
    <a href="#">Introduction to Management</a>
    <a href="#">Computer Graphics and Animation</a>
</div>
</div>

<div className="dropdown">
<a href="#">Sem 6</a>
<div className="dropdown-content">
<a href="#">Mobile Programming</a>
<a href="#">Distributed System</a>
<a href="#">Applied Economics</a>
<a href="#">Advanced Java Programming</a>
<a href="#">Network Programming</a>
<a href="#">Project II</a>
</div>
</div>

<div className="dropdown">
<a href="#">Sem 7</a>
<div className="dropdown-content">
<a href="#">Cyber Law and Professional Ethics</a>
<a href="#">Cloud Computing</a>
<a href="#">Internship</a>
<a href="#">E1- Image Processing</a>
<a href="#">E1- Advanced Dot Net Technology</a>
<a href="#">E2- Database Administration</a>
<a href="#">E2- E-Governance</a>
<a href="#">E3- Network Administration</a>
<a href="#">E3- Artificial Intelligence</a>
</div>
</div>

<div className="dropdown">
<a href="#">Sem 8</a>
<div className="dropdown-content">
<a href="#">Operations Research</a>
<a href="#">Project III</a>
<a href="#">E1- Database Programming</a>
<a href="#">E1- Multimedia System</a>
<a href="#">E2- Geographical Information System</a>
<a href="#">E2- Knowledge Engineering</a>
<a href="#">E3- Data Analysis and Visualization</a>
<a href="#">E3- Information Security</a>
<a href="#">E4- Machine Learning</a>
<a href="#">E4- Internet of Things</a>
</div>
</div>

<div className="dropdown">
<div className="contact">
<a href="#contactus">Contact</a>
</div>
</div>

</div>
</>
  )
}

export default Semnav