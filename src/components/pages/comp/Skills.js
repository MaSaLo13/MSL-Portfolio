import React from 'react';
import "./App.css"


export default function Skills() {
  return (
    <section className="bg-light" id="skill">
    <div className="containers2 py-5">
        <h4 className='h4'>Skills </h4> 
        <div className="row py-5">
            <div className=" d-flex justify-content-around py-2 flex-wrap text-dark">
                <h3><iconify-icon icon="logos:html-5"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:css-3"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:css-3"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:nodejs"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:javascript"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:jquery"></iconify-icon></h3>
                <h3><iconify-icon icon="cib:npm"></iconify-icon></h3>
            </div>
        </div>         

        <div className="row py-4 text-dark">
            <div className=" d-flex justify-content-evenly p-2 flex-wrap">
            <h3><iconify-icon icon="file-icons:sequelize"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:express"></iconify-icon></h3>
                <h3><iconify-icon icon="vscode-icons:file-type-mongo"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:handlebars"></iconify-icon></h3>
                <h3><iconify-icon icon="cib:mysql"></iconify-icon></h3>
                <h3><iconify-icon icon="bxl:heroku"></iconify-icon></h3>
                <h3><iconify-icon icon="akar-icons:react-fill"></iconify-icon></h3>
                <h3><iconify-icon icon="simple-icons:apollographql"></iconify-icon></h3>
 
            </div>
        </div>    

    </div>       
</section>
  )
}
