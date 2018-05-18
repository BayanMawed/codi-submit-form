// eslint-disable-next-line 
import React from 'react';

export const create_student = (imagename,gender,name, availability, skills,city,image) => 
{ return { 
    gender,
    name, 
    availability,
    skills,
    city,
    imagename
  }
}



const students = [
  create_student('Ahmad','m','Ahmad', 'in less than 2 months', ['react','node','javascript','php','laravel','html','css'] ,'beirut'),
  create_student('adam','m','adam', 'in less than 2 months', ['html','css','javascript'],'jounyeh'),
  create_student('ibrahim','m','ibrahim', 'available', ['php','css','html','laravel'],'jounyeh'),
  create_student('avatar','m','ali', 'available', ['node','javascript','react'],'sarafand'),
  create_student('amr','m','amr', 'in less than 1 month', ['html','css','wordpress','js','react'],'alay'),
  create_student('anas','m','anas', 'in less than 2 months', ['html', 'css', 'javascript', 'node', 'react', 'sql' ],'beirut'),
  create_student('anthony','m','anthony', 'available', ['php','wordpress','javascript','html','css'],'jounyeh'),
  create_student('avatar','f','bayan', 'in less than 2 months', ['bootsrap','html','css','javascript'],'saida'),
  create_student('fadi','m','fadi', 'available', ['react','node'],'jbeil'),
  create_student('avatar','m','hampig', '3 months or more', ['html','css','javascript'],'jbeil'),
  create_student('avatar','m','jad', 'available', ['wordpress','html','css'],'jounyeh'),
  create_student('avatar','f','tereza', 'in less than 1 month', ['react','wordpress'],'jbeil'),
  create_student('nagam','f','nagam', 'available', [ 'html', 'css', 'js', 'react', 'meteor'],'saida'),
  create_student('avatar','m','paul', 'in less than 1 month', ['html','wordpress'],'jounyeh'),
  create_student('avatar','m','saleh', 'available', ['html','css','javascript'],'beirut'),
  create_student('souad','f','souad', 'available', ['html','css','javascript','node','react','meator'],'jbeil'),
  create_student('mitza','f','mitza', 'in less than 2 months', ['video editor','adobe premiere','html','css','javascript','react'],'beirut'),
  create_student('avatar','m','gabi', '3 months or more', ['javascript','react','php','laravel','ios'],'jounyeh'),
  create_student('avatar','m','chriss', 'available', ['html','css','javascript','react'],'beirut'),
  create_student('avatar','m','samer', '3 months or more', ['html','css','javascript','react'],'saida'),
  create_student('kevin','m','kevin', 'not available', ['angular', 'wordpress', 'react', 'photoshop', 'illustrator'],'beirut'),
];

export default students;