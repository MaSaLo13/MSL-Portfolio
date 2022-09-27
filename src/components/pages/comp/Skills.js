import React from 'react';
import "./App.css"


export default function Skills() {
  return (
    <section className="bg-light" id="skill">
    <div className="containers2 py-5">
        <h4 className='h4'>Skills </h4> 
        <div className="row py-5">
            <div className=" d-flex justify-content-around py-2 flex-wrap text-dark">
                <h3><iconify-icon icon="logos:html-5" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:css-3" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:bootstrap" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:nodejs" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:javascript" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:jquery" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:npm" width="50" height="50"></iconify-icon></h3>
            </div>
        </div>         

        <div className="row py-4 text-dark">
            <div className=" d-flex justify-content-evenly p-2 flex-wrap">
            <h3><iconify-icon icon="logos:sequelize" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:express"></iconify-icon></h3>
                <h3><iconify-icon icon="vscode-icons:file-type-mongo" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:handlebars" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:mysql" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:heroku-icon" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="vscode-icons:file-type-reactjs" width="50" height="50"></iconify-icon></h3>
                <h3><iconify-icon icon="logos:apollostack" width="50" height="50"></iconify-icon></h3>
 
            </div>
        </div>    

    </div>       
</section>
  )
}
