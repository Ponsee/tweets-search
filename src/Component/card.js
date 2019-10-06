import React from 'react';

const Content = (props) => {
	const { data } = props;
	const { is_quote_status, quoted_status, retweeted_status } = data;
	let text = is_quote_status ? quoted_status && quoted_status.text : retweeted_status && retweeted_status.text;
	text = text ? text : data.text
	return <p class="card-text">{text}</p>;
}

class Card extends React.Component {

	render() {
		const { filteredData, cardCount } = this.props;

		return filteredData.map((p, index) => {
			console.log(p)
			if (cardCount >= index + 1) {
				return <div className="card m-2" style={{ "width": "20rem" }}>
					<div className="card-body">
						<img src={p.user.profile_image_url_https} alt="profile image" class="rounded-circle" />
						<h5 className="card-title" style={{ "display": "inline-flex", paddingLeft: "4px" }}>{p.user.name}</h5>
						<h6 className="card-subtitle mb-2 text-muted" style={{ paddingLeft: "45px" }} >@{p.user.screen_name}</h6>
						<Content data={p} />
						{/* <p class="card-text">{p.hasOwnProperty("quoted_status") ? p.quoted_status.text : p.hasOwnProperty("retweeted_status") ? p.retweeted_status.text : p.text}</p> */}
						{p.hasOwnProperty("quoted_status") && p.quoted_status.entities.hasOwnProperty("media") && p.quoted_status.entities.media[0].type === "photo" &&
							<img src={p.quoted_status.entities.media[0].media_url_https} style={{ height: `${p.quoted_status.entities.media[0].sizes.small.h}px`, width: `18rem` }} />
						}
					</div>
				</div>
			}

		})
	}
}

export default Card;