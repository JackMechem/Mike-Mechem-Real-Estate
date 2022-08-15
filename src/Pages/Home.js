import React from "react";
import { PageContainer, PageImage, PageImageSubTitle, PageImageTitle, PageImageTitleContainer, Paragraph, Title } from "../styles/global";

const Home = () => {
    return (<PageContainer>
        <PageImage src="https://i.pinimg.com/originals/0a/e9/19/0ae9190af6095b002a22d57df53b70ad.jpg" />
        <PageImageTitleContainer>
            <PageImageTitle>Mike Mechem</PageImageTitle>
            <PageImageSubTitle>Urban Nest Realty</PageImageSubTitle>
        </PageImageTitleContainer>
        <Title>Mike Mechem</Title>
        <Paragraph>I have been helping people buy and sell real estate for over 16 years.  Whether you’re selling or purchasing, I am committed to helping you achieve your real estate goals by providing you with quality information and outstanding service so that making the right decision is easy.  I will seek to provide you with unparalleled professionalism, support, and guidance.  My goal is to deliver an absolutely stress-free and smooth process to all of my clients.  </Paragraph>
    </PageContainer>)
}

export default Home;