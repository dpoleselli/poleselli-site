import "./resume.css"
import content from "./content"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default function Resume() {
    return (
        <div className="container">
            <header className="flex-between">
                <div>
                    <h1 className="remove-margin">{ content.header.name }</h1>
                    <a href={ `mailto: ${content.header.email}` }
                        target="_blank"
                        rel="noreferrer">
                        { content.header.email }
                    </a>
                    <br />
                    <a href={ `tel:${content.header.phone}` }>
                        { content.header.phone }
                    </a>
                </div>
                <div>
                    <address>
                        { content.header.address0 } <br />
                        { content.header.address1 }
                    </address>
                    <a href={ content.header.github }
                        target="_blank"
                        rel="noreferrer">
                        GitHub
                    </a>
                    <br />
                    <a href={ content.header.linkedIn }
                        target="_blank"
                        rel="noreferrer">
                        LinkedIn
                    </a>
                </div>
            </header>
            <hr />
            <section>
                <h3 className="section-header">Education</h3>
                <div className="flex-between">
                    <span className="section-subheader">
                        { content.education.school }
                    </span>
                    <span className="section-right-text">{ content.education.dates }</span>
                </div>
                <ul>
                    { content.education.bullets.map(text => <li key={ text }>{ text }</li>) }
                </ul>
            </section>

            <section>
                <h3 className="section-header">Experience</h3>
                <Accordion allowMultipleExpanded allowZeroExpanded>
                    { content.experience.jobs.map(job => {
                        return (
                            <AccordionItem key={ job.company + "-" + job.title }>
                                <div className="job">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div className="section-subheader-spacing">
                                                <div className="flex-between">
                                                    <span className="section-subheader">
                                                        { job.title }
                                                    </span>
                                                    <span className="section-right-text">{ job.dates }</span>
                                                </div>
                                                <span className="company">{ job.company }</span>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <ul>
                                            { job.bullets.map(text => <li key={ text }>{ text }</li>) }
                                        </ul>
                                    </AccordionItemPanel>
                                </div>
                            </AccordionItem>
                        )
                    }) }
                </Accordion>
            </section>

            <div className="row">
                <div className="column">
                    <section>
                        <h3 className="section-header">Certifications</h3>
                        <ul>
                            { content.certifications.map(cert => <li key={ cert }>{ cert }</li>) }
                        </ul>
                    </section>
                </div>
                <div className="column">
                    <section>
                        <h3 className="section-header">Accomplishments & Interests</h3>
                        <ul>
                            { content.accomplishments.map(text => <li key={ text }>{ text }</li>) }
                        </ul>
                    </section>
                </div>
            </div>

            <section>
                <h3 className="section-header">Skills</h3>
                <div className="row">
                    { content.skills.map(col => {
                        return (
                            <div className="column" key={ col[0][0] }>
                                <ul>
                                    { col.map(skill => <li key={ skill }>{ skill }</li>) }
                                </ul>
                            </div>
                        )
                    }) }
                </div>
            </section>
        </div>
    )
}