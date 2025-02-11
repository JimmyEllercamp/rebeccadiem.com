import React from "react";
import { Link } from "react-router-dom";
import data from "../data/events.json";

const Eventv2 = ({ isBg }) => {
    const { events } = data;
    return (
        <section
            id="events"
            className={`section-padding event ${
                isBg === "yes" ? "bg-one" : ""
            }`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <h2>
                                <span>{events.title}</span>
                            </h2>
                            <div className="section-divider divider-traingle"></div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-0">
                    {events.singleBlog.slice(0, 4).map((data, i) => (
                        <div
                            key={data.id}
                            className="col m-30px-b"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={(i + 2) * 50}
                        >
                            <div className="card h-100 translateEffect1">
                                <div className="card-body">
                                    <div className="date">
                                        <p>
                                            {data.date}{" "}
                                            <span>{data.month}</span>
                                        </p>
                                    </div>
                                    <h4 className="mb-3">{data.title}</h4>
                                    <p>{data.description}</p>
                                </div>
                                {data.image !== "" && (
                                    <img src={data.image} alt={data.title} />
                                )}
                                <a
                                    href={data.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {data.btn}
                                    <i className="icofont-rounded-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Eventv2;
