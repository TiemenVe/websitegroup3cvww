import React, { Component } from "react";
import css from "./Region.module.scss";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default class Region extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div {...storyblokEditable(this.props.blok)} className={css["wrapper"]}>
					<div className={css["content"]}>
						<div className={[css["box"], css["head"]].join(" ")}>
							<h1>{this.props.blok.title}</h1>
						</div>
						<div className={[css["box"], css["sidebar"]].join(" ")}>
							<div className={css["regionimage"]}><img src={this.props.blok.image.filename} /></div>
							<div className={css["regiondetails"]}>
								<div className={css["regiondetailitem"]}>{this.props.blok.title} </div>
								
							</div>
						</div>
						{/* <div className={[css["box"], css["experience"]].join(" ")}>
							<h2>Experience</h2>
							{this.props.blok.experiences.map((nestedBlok) => (
								<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
							))}
						</div> */}
						<div className={[css["box"], css["foot"]].join(" ")}>
							<div>&copy; {this.props.blok.title}  {new Date().getFullYear()}</div>
						</div>
					</div>
				</div>
			</>
		);
		
	}
}