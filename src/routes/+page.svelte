<script lang="ts">
	import Newsletter from '../components/Newsletter.svelte';
	import FeatureCard from '../components/FeatureCard.svelte';
	import LatestPosts from '../components/LatestPosts.svelte';
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '../lib/siteConfig';

	import type { PageData } from './$types';
	import type { ContentItem } from '../lib/types';

	export let data: PageData;
	$: items = data.items as ContentItem[];
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div
	class="flex flex-col items-start justify-center max-w-2xl px-4 pb-16 mx-auto border-gray-200 dark:border-gray-700 sm:px-8"
>
	<div class="flex flex-col-reverse items-start sm:flex-row">
		<div class="flex flex-col pr-8">
			<h1 class="mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
				Perth Glory News
			</h1>
			<h2 class="mb-4 text-gray-700 dark:text-gray-200">
				Breaking: Glory secure vital first win of the season against Roar!
			</h2>
			<p class="mb-16 text-gray-600 dark:text-gray-400">
				Stay up to date with the latest Perth Glory news, match reports, and team updates.
			</p>
		</div>
	</div>

	<section class="w-full mb-16">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Latest News
		</h3>
		<div class="flex flex-col gap-6 md:flex-row">
			<FeatureCard 
				title="Williams goal seals vital victory over Roar" 
				href="/match-report-latest" 
				stringData="Latest Match"
			/>
			<FeatureCard
				title="Brown's late penalty secures away point"
				href="/team-update"
				stringData="Women's Team" 
			/>
			<FeatureCard 
				title="Defender Canga departs club" 
				href="/transfer-news" 
				stringData="Transfer News"
			/>
		</div>
	</section>

	<section class="w-full mb-16">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Recent Results
		</h3>
		<div class="flex flex-col gap-6 md:flex-row">
			<FeatureCard 
				title="A-League Men: Glory 1-0 Brisbane Roar" 
				href="/alm-results" 
				stringData="Men's Team"
			/>
			<FeatureCard 
				title="A-League Women: WSW 1-1 Glory" 
				href="/alw-results" 
				stringData="Women's Team"
			/>
		</div>
	</section>

	<LatestPosts {items} />

	<Newsletter />
</div>
