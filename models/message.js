var Message = function(from,to){

		return {
		    "html": "<p>Example HTML content</p>",
		    "text": "Example text content",
		    "subject": "example subject",
		    "from_email": from,
		    "from_name": from,
		    "to": [{
		            "email": to,
		            "name": "Recipient Name",
		            "type": "to"
		        }],
		    "headers": {
		        "Reply-To": to
		    },
		    "important": false,
		    "track_opens": null,
		    "track_clicks": null,
		    "auto_text": null,
		    "auto_html": null,
		    "inline_css": null,
		    "url_strip_qs": null,
		    "preserve_recipients": null,
		    "view_content_link": null,
		    "bcc_address": "message.bcc_address@example.com",
		    "tracking_domain": null,
		    "signing_domain": null,
		    "return_path_domain": null,
		    "merge": true,
		    "merge_language": "mailchimp"
		    
		}
};


// make this available to our users in our Node applications
module.exports = Message;