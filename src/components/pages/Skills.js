import React from 'react';


export default function Skills() {
  return (
    <section className="skill-section px-5" id="skill">
    <div className="containers py-5">
        <h4 >Skills </h4> 
        <div className="row py-5">
            <div className="col-md-5 d-flex justify-content-around py-2 flex-wrap">
                <h3><iconify-icon icon="akar-icons:html-fill"></iconify-icon></h3>
                <h3><iconify-icon icon="akar-icons:css-fill"></iconify-icon></h3>
                <h3><iconify-icon icon="akar-icons:bootstrap-fill"></iconify-icon></h3>
                <h3><iconify-icon icon="fa-brands:node"></iconify-icon></h3>
                <h3><iconify-icon icon="akar-icons:javascript-fill"></iconify-icon></h3>
                <h3><iconify-icon icon="akar-icons:jquery-fill"></iconify-icon></h3>
                <h3><iconify-icon icon="cib:npm"></iconify-icon>
</h3>
            </div>
        </div>         

        <div className="row py-4">
            <div className="col-md-5 d-flex justify-content-evenly p-2 flex-wrap">
            <h3><iconify-icon icon="file-icons:sequelize"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:express"></iconify-icon></h3>
                <h3><iconify-icon icon="vscode-icons:file-type-mongo"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:handlebars"></iconify-icon></h3>
                <h3><iconify-icon icon="cib:mysql"></iconify-icon></h3>
                <h3><iconify-icon icon="bxl:heroku"></iconify-icon></h3>
                <h3><iconify-icon icon="akar-icons:react-fill"></iconify-icon></h3>
                <h3><iconify-icon icon="simple-icons:apollographql"></iconify-icon>
</h3>
 
            </div>
        </div>    

    </div>       
</section>
  )
}
