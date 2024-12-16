import React, { Component } from "react";
import css from "./Food.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import TeacherCard from "../TeacherCard/TeacherCard";
import Element from "../../genericComponents/Element/Element";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Food extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>
				<main>
					<Hero blok={this.props.blok} contentTypeTag="food" />
					<div className={css["food-page__main-content"]}>
						<div id="food-page__short-description" key="food-page__short-description" className={css["food-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Food description</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
						{/* <div id="food-page__short-description" key="food-page__short-description" className={css["food-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Our Teachers</h2>
								{this.props.blok.teachers && this.props.blok.teachers.map((teacher) => (
									<TeacherCard blok={teacher} key={teacher._uid} />
								))}
							</section>
						</div> */}
						
					</div>

					{this.props.blok.bottombloks && this.props.blok.bottombloks.map((nestedBlok) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
					))}
				</main>
			</div>
		);

	}
}