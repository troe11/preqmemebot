require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
	userAgent: 'prequelmeme-bot-v1.1-node',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});

const client = new Snoostorm(r);

const streamOpts = {
	'subreddit': 'all',
	'results': 10
};

const comments = client.CommentStream(streamOpts);

comments.on('comment', (comment)=>{
	console.log('comment');
})