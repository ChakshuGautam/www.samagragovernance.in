---
templateKey: blog-post
title: 'Leveraging Artificial Intelligence to deliver advisory to farmers '
author: Gautam Rajeev and Vijeeth Srinivas
projectId: KONNECT
authorImage: /img/person-vector_updated.jpeg
date: 2023-03-31T01:11:14.826Z
description: .
featuredimage: /img/1.png
---
**Why is advisory important in agriculture?** 

What should be the ideal distance between two sugarcane seeds for optimal growth? Which variety of paddy seeds should be sown for the upcoming Kharif season to generate maximum yield in accordance with changing agro-climatic conditions? What schemes can one avail to reduce the expenditure incurred in purchasing cattle feed? 

These are some of the many intricate decisions that farmers take through a given season- decisions that are determinants of yield, output realisation, and income. Any decision-maker makes choices based on the information provided to them and the most convenient and conventional sources of advice for farmers consist of their families and communities– stakeholders who serve as their pillars of support across diverse adversities. This ‘advice’, whilst based on principles and practices passed down from generations, is often inefficient. Traditional practices are divorced from progress in agricultural science and technology (e.g. scientific germination of high-yielding seeds), which is a crucial driver of improvement in productivity and farmers’ income.  

Through the KONNECT program, Samagra is working with the Department of Agriculture & Farmers’ Empowerment and the Fisheries & Animal Husbandry Development Department, Government of Odisha to improve farmers’ income in the state. Improving the delivery of extension services to farmers at scale by leveraging technology has been an important part of our framework and a focal point of our interventions. We started developing Ama KrushAI to provide advisory to farmers grounded in sustainable practices and scientific progress with the same familiarity and comfort that characterises their interactions with traditional sources of advisory. 

**Gaps in existing modalities of extension delivery** 

Given the importance of agriculture in India’s economic and livelihood landscape, state governments have introduced extension mechanisms to deliver advisory services to farmers. These mechanisms centre around the Extension Worker–a government employee responsible for last-mile service delivery to farmers and trained to disseminate information about modern practices in agriculture. [Studies](https://www.thehansindia.com/posts/index/News-Analysis/2018-07-24/Reform-agri-extension-to-boost-ryots-income/400625) suggest that there are about 1,162 farmers for each extension worker in India. Even when supplemented with a marginal NGO workforce in some states, it is practically impossible for an extension worker to provide services to each farmer. This shortage of staff leads to two challenges. First, all farmers are not able to access scientific advisory as and when required. This is often critical, for example while protecting animals/plants from disease/pest attacks or environmental disruptions. Second, the availability of extension staff to resolve farmers’ queries (regarding seed selection, pesticide & fertiliser usage, and scheme eligibility) is very limited. Supplementing the extension staff with systems that enable advisory delivery & query resolution has hence been a key focus area. 

![](/img/adapt-initiative-3.jpg "Krushi Unnat Sahiyogis (part-time extension staff) advising farmers on plant protection in Kendrapara, Odisha during Kharif season")

_Krushi Unnat Sahiyogis (part-time extension staff) advising farmers on plant protection in Kendrapara, Odisha during Kharif season_

Attempts have been made to improve extension delivery through technology, which have led to varying but limited impact. Several states in India have introduced call centres which farmers can access to get information on demand and resolve queries. The challenges of this however are availability issues at timings convenient to farmers and the competence of call centre agents in delivering technical advisory has been called into question. More recently, the delivery of advisory through IVRS and SMS has emerged as a popular trend. Whilst these may be contextualised to farmers’ practices, advisory is not cognizant of the exact requirements and circumstances faced by each farmer. Moreover, most of these services are push-based and are not available to farmers on demand. 

Powerful mobile applications have been developed that can deliver accurate and personalised advisory to farmers. However, the reach and usage of these systems have been very limited due to the lack of user-centricity. Complex navigation to modules prevents farmers from getting the information they need conveniently. 

The most recently developed tech-enabled solutions are chatbots. On paper, they solve several identified challenges centred around the availability of information and query resolution on demand. However, in practice, they have failed to deliver scaled impact because of their inability to interact with farmers in vernacular languages seamlessly and their restricted ability in resolving [unstructured queries](https://www.zendesk.com/in/blog/chatbot-vs-conversational-ai/). 

Harnessing technology to deliver effective & user-centric advisory services, at scale to farmers, from diverse backgrounds continues to be a puzzle that is yet to be cracked in the Indian agricultural domain.

**ChatGPT - a new dawn?** 

It was in November 2022 that [ChatGPT](https://openai.com/blog/chatgpt) was released by Open AI with much fanfare. It was straight out of a sci-fi novel with its ability to generate human-like responses, converse intelligently on multiple topics and engage with users on the fly. The prospects seemed limitless- especially for “customer-service”. It could truly engage with a user as if it had knowledge regarding the asked questions- it would even ask follow-up questions and modify its responses based on user feedback. 

Immediately, we started thinking of multiple governance use cases where this technology could be impactful. Our first thought was information dissemination- scrutinising government notices/circulars to apply for schemes and resolving questions on govt websites is often an arduous experience for the average citizen. Only if we could get artificial intelligence to understand all the intricacies to seamlessly provide information to citizens by answering their questions - being nothing short of a personal government desk concierge.

With this in mind, we set out to try and teach the GPT model some of the ‘expert information’ that we had surrounding agriculture in Odisha - details of government schemes, the certified package of practices for different crops, etc.  Our initial attempts saw some fairly decent results quickly and we were excited by its potential. However, the real push for the bot came with the launch of Krushi Odisha Mela.

**Krushi Odisha 2023**

![](/img/krushi-odisha-mela.png "Inauguration of Krushi Odisha 2023 by the Hon’ble Chief Minister of Odisha, Naveen Patnaik")

_Inauguration of Krushi Odisha 2023 by the Hon’ble Chief Minister of Odisha, Naveen Patnaik_

[Krushi Odisha](https://krushi-odisha.in/) is a state-wide agriculture-centric event organised by the Government of Odisha every year. For 2023, the theme of the event was ‘Emerging Technologies in Agriculture’ and for the very first time, the government set up a farmer facilitation centre (helpdesk) to resolve farmers’ queries, and inform them of different govt. schemes & services, and handhold them through applications for the same. This help desk, located at the epicentre of the event’s setup, was an ideal setting to interact with farmers of diverse backgrounds and introduce new technologies and solutions to them. We felt that Krushi Odisha and the Farmer Facilitation Centre were the perfect platforms for us to demonstrate and test the AI-driven solution to advisory delivery with farmers from across the state. And hence we decided to undertake a daunting task- contextualising GPT to a domain-specific use-case within 10 days.

![](/img/farmer-facilitation-centre.jpg "1000+ farmer queries were recorded at the Farmer Facilitation Centre during Krushi Odisha 2023")

_1000+ farmer queries were recorded at the Farmer Facilitation Centre during Krushi Odisha 2023_

**Fine-tuning the model**

Our initial attempts at fine-tuning GPT on our ‘expert information’ didn’t go as planned. While ChatGPT doesn’t have an option to fine-tune the model, there are [options](https://platform.openai.com/docs/guides/fine-tuning) available for Open AI’s DaVinci model (which runs on [GPT-3](https://platform.openai.com/docs/models/overview)- a predecessor to ChatGPT). However, our fine-tuned models were not performing as per expectations and initial tests were characterised by [hallucinating](https://arxiv.org/abs/2202.03629) results i.e. the model throwing junk responses that didn’t tie in with the questions.

We decided to try a different route- instead of training the GPT model with our ‘expert database’, we decided to analyse each query that was asked and tailor our approach based on whether our database had related content or not.  

So now our setup looked at the question provided and searched within a database for any similar content. If it found relevant content, it sent that content to GPT for massaging and producing a user-centric response. If it didn’t find anything relevant, then it sent the user prompt directly to GPT-3 to answer it based on GPT’s pre-trained model. This allowed us to have the best of both worlds- we had specially curated content presented in comprehensible form for the technical questions and we had ChatGPT providing generic answers for questions we didn’t yet have any specific information about. 

And how did we search within our database for content related to each prompt? We used a sentence similarity score built using [BERT](https://towardsdatascience.com/bert-explained-state-of-the-art-language-model-for-nlp-f8b21a9b6270) (Bidirectional Encoder Representations from Transformers). BERT is another famous [NLP](https://www.ibm.com/in-en/topics/natural-language-processing#:~:text=IBM%20Watson%20Discovery-,What%20is%20natural%20language%20processing%3F,same%20way%20human%20beings%20can.) (Natural Language Processing) tool that encodes sentences such that its ‘similarity’ to any other sentence can be calculated quickly. The similarity score between two sentences is calculated on a scale of 0 (least similar) to 1 (most similar).

For example - if a user asks the question - “How do I protect my crop from red cotton bug pest attacks”, then BERT calculates the similarity between the above question and the following content tags stored in the database: 

Tag 1:  ‘Varietal selection of seeds for black gram ’:  Similarity score -  0.5 

Tag 2:  “Fertiliser management for cotton”:  Similarity score -  0.6 

Tag 3:  “Management of red cotton bug for cotton”: Similarity score - 0.9 

BERT is then able to pick content tagged 3 as the most relevant content and send its details to GPT.  

The core was ready, now we needed to figure out the best way for farmers to interact with it. Without hesitation, we turned to [UCI](https://github.com/samagra-comms/uci-apis), a [DPG](https://www.codeforgovtech.in/digitalpublicgoods) (Digital Public Good) communications system developed by Samagra that has already been implemented successfully for multiple governance use cases.  Another imperative feature from the perspective of farmers in Odisha was communication in regional languages- specifically Odia. This would get us a little closer to our dream of farmers being able to communicate unassisted with artificial intelligence as naturally as they would with their community members. We plugged in [Bhashini](https://bhashini.gov.in/ulca/model/explore-models) - a national platform for Machine Learning models built for Indian languages. Bhashini has translation, transliteration, speech-to-text, and text-to-speech models for a variety of Indian languages (including Odia) and aims to provide a holistic solution across any language interaction needs. In fact, Bhashini’s importance was [highlighted](https://yourstory.com/2023/01/satya-nadella-microsoft-digital-public-goods-india) recently by Satya Nadella (Chairman and CEO, Microsoft) himself. This now allowed users to log in and type questions in Odia and receive responses in Odia. 

Our engineering team co-worked with the design team to create a UI around this in just two days and “wham!” the product was ready within a week. 

![](/img/ama-krushai-flow.png "Flow for queries & initial design of user interface for Ama KrushAI ")

_Flow for queries & initial design of user interface for Ama KrushAI_ 

Through our demonstrations at Krushi Odisha the first affirmative answer to, “Can Artificial Intelligence be used to provide accessible and familiar extension services to farmers?” was received conclusively from end users. Given that it was immediately preceded by several nervous rounds of internal testing, we were pleasantly surprised by the overwhelmingly positive [feedback](https://drive.google.com/file/d/1hvXfVigi1TyaowdAxHzqpqNC35i2hsuC/view?usp=sharing) from government officials & farmers from the very first day of our demonstrations at Krushi Odisha. Several repeat users were identified amongst the 300 farmers who were recorded using this system across the three-day event. 

Owing to the growing buzz and interest surrounding this AI-driven system, the government decided to conduct an extended demonstration during a Krushi Shiksha Shivir (panel discussion on agriculture) on ‘Private Led Extension Services in Command Areas’.  The Chatbot was able to seamlessly resolve farmers’ queries on pest incidence, application of fertilizers, treatment of diseases in cattle, and government schemes and services. Given the clear need and potential for impact, it was decided to [launch](https://ommcomnews.com/odisha-news/krushi-odisha-2023-guv-prof-ganeshi-lal-launches-ai-powered-chatbot-ama-krushai-for-farmers) this system formally at the hands of the Hon’ble Governor of Odisha, Prof. Ganeshi Lal. The Government announced its intention of piloting this system amongst 10,000 farmers in the state before implementing a state-wide rollout prior to the Kharif season. 

![](/img/ama-krushai-launch.png "Launch of Ama KrushAI by the Hon’ble Governor of Odisha, Prof. Ganeshi Lal at the closing ceremony of Krushi Odisha 2023")

_Launch of Ama KrushAI by the Hon’ble Governor of Odisha, Prof. Ganeshi Lal at the closing ceremony of Krushi Odisha 2023_

**The Way Forward** 

While the pilot was a success, we received critical feedback from the initial users of Ama KrushAI. One key feature identified was automated ‘speech-to-text’ conversion as farmers prefer being able to speak into their phones rather than typing queries. Then, we decided to train the bot on a lot more content to improve technical query resolution. Lastly, the system had to be scaled from 3-4 devices to around 10,000 which is expected to bring its own unique set of challenges. We are presently engaged in developing technical solutions to these issues which are imperative to be resolved before the launch of the pilot. 

![](/img/ama-krushai-panel.png "KONNECT team giving a live demonstration of Ama KrushAI during the Krushi Shiksha Shivir (panel discussion) on Pvt. Led Extension in Command Areas")

_KONNECT team giving a live demonstration of Ama KrushAI during the Krushi Shiksha Shivir (panel discussion) on Pvt. Led Extension in Command Areas_

As Odisha gears itself to launch Ama KrushAI for farmers, user-centric artificial intelligence systems that deliver information to citizens are emerging as critical modalities for solving information asymmetry in governance. Most of the hullabaloo around the latest AI products has been around their business use-cases but there is tremendous scope to use them to solve all kinds of governance problems. Systems can be trained to provide schematic information to citizens and assist teachers and students in delivering and taking assessments. Small businesses can be handheld through complex processes including GST compliance and insurance coverage. Through intelligent and interactive systems, governments can equip themselves to solve critical challenges in public administration to improve the quality of lives of citizens.
