import React from 'react';
import styled from 'styled-components';
import { Database, ExternalLink, Globe, FileText, Award, TrendingUp } from 'lucide-react';

const DatasetsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`;

const DatasetItem = styled.div`
  margin-bottom: 3rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(122, 178, 211, 0.15), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none; /* Allow clicks to pass through overlay */
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-8px);
 
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const DatasetTitle = styled.h2`
  color:rgb(75, 106, 155);
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg,rgb(73, 151, 196),rgb(34, 70, 133));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const DatasetDescription = styled.p`
  text-align: justify;
  color: #475569;
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const DatasetName = styled.span`
  
  font-weight: 700;
  
  padding: 4px 8px;
  border-radius: 8px;
`;

const DatasetLink = styled.a`
  
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #4A628A);
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }
`;

const DatasetStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Datasets: React.FC = () => {
  return (
    <DatasetsContainer>
      <PageHeader>
        <PageTitle>Research Datasets</PageTitle>
        <PageSubtitle>Comprehensive benchmark datasets for low-resource Bangla language research</PageSubtitle>
      </PageHeader>

      <DatasetItem>
        <DatasetTitle>
          <Globe size={28} />
          1. Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language
        </DatasetTitle>
        <DatasetDescription>
          The <DatasetName>
            <DatasetLink href="https://data.mendeley.com/datasets/bj5jgk878b/2" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              "Vashantor"
            </DatasetLink>
          </DatasetName> dataset comprises 32,500 sentences from five regions in Bangladesh (Chittagong, Noakhali, Sylhet, Barishal, and Mymensingh) across two language formats: Bangla and Banglish (a mix of Bangla and English written in the English alphabet). The name "Vashantor" (ভাষান্তর), meaning "Translation," reflects its focus on Bangla and translations involving the language. Data was curated from websites, social media, and discussion boards to capture natural, real-world dialogues. Each region and language having 2,500 samples distributed across training, testing, and validation sets. Additionally, the dataset includes a core set with 2,500 samples each for Bangla, Banglish, and English.
        </DatasetDescription>
        <DatasetStats>
          <StatItem>
            <TrendingUp size={16} />
            32,500 sentences
          </StatItem>
          <StatItem>
            <Globe size={16} />
            5 regions
          </StatItem>
          <StatItem>
            <FileText size={16} />
            2 language formats
          </StatItem>
        </DatasetStats>
      </DatasetItem>

      <DatasetItem>
        <DatasetTitle>
          <Award size={28} />
          2. Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis
        </DatasetTitle>
        <DatasetDescription>
          The <DatasetName>
            <DatasetLink href="https://data.mendeley.com/datasets/hdhnrrwdz2/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              "Motamot"
            </DatasetLink>
          </DatasetName> dataset (মতামত in Bengali, meaning "Opinion" in English) consists of 7,058 data points focused on political sentiment analysis in the Bengali language. Compiled from a range of online newspapers covering political events and conversations during Bangladeshi elections, it includes 4,132 positive and 2,926 negative sentiment-labeled instances. The data was sourced from reputable news outlets, ensuring a diverse and representative sample of political discourse in Bangladesh, providing valuable insights into the opinions shaping the country's political landscape.
        </DatasetDescription>
        <DatasetStats>
          <StatItem>
            <TrendingUp size={16} />
            7,058 data points
          </StatItem>
          <StatItem>
            <Award size={16} />
            4,132 positive
          </StatItem>
          <StatItem>
            <Award size={16} />
            2,926 negative
          </StatItem>
        </DatasetStats>
      </DatasetItem>

      <DatasetItem>
        <DatasetTitle>
          <FileText size={28} />
          3. Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language
        </DatasetTitle>
        <DatasetDescription>
          The <DatasetName>
            <DatasetLink href="https://data.mendeley.com/datasets/mzxmt8tfjs/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              "Uddessho"
            </DatasetLink>
          </DatasetName> dataset, meaning "Intent" in English, is designed for multimodal author intent classification. It contains 3048 post instances categorized into six intent types: Informative, Advocative, Promotive, Exhibitionist, Expressive, and Controversial. The dataset is divided into a training set with 2423 posts, a testing set with 313 posts, and a validation set with 312 posts, totaling 3048 posts.
        </DatasetDescription>
        <DatasetStats>
          <StatItem>
            <TrendingUp size={16} />
            3,048 posts
          </StatItem>
          <StatItem>
            <FileText size={16} />
            6 intent types
          </StatItem>
          <StatItem>
            <Database size={16} />
            Multimodal
          </StatItem>
        </DatasetStats>
      </DatasetItem>

      <DatasetItem>
        <DatasetTitle>
          <Award size={28} />
          4. BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language
        </DatasetTitle>
        <DatasetDescription>
          The <DatasetName>
            <DatasetLink href="https://data.mendeley.com/datasets/7dggbjn5sd/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              "BanglaCalamityMMD"
            </DatasetLink>
          </DatasetName> dataset is a comprehensive multimodal resource designed to address the significant gap in disaster identification within Bangla language text. Comprising a total of 7,903 instances spanning eight distinct categories: Landslides, Wildfire, Tropical Storm, Drought, Flood, Earthquake, Human Damage, and Non-Disaster—the dataset is meticulously divided into three subsets: 6,323 instances for training, 790 instances for testing, and 790 instances for validation. This structured division ensures that models can be trained effectively, tested rigorously, and validated accurately, thereby enhancing the overall reliability and applicability of disaster identification systems in Bangla.
        </DatasetDescription>
        <DatasetStats>
          <StatItem>
            <TrendingUp size={16} />
            7,903 instances
          </StatItem>
          <StatItem>
            <Award size={16} />
            8 categories
          </StatItem>
          <StatItem>
            <Database size={16} />
            Multimodal
          </StatItem>
        </DatasetStats>
      </DatasetItem>

      <DatasetItem>
        <DatasetTitle>
          <TrendingUp size={28} />
          5. MultiBanFakeDetect: An Extensive Benchmark Dataset for Multimodal Under-Resource Bangla Fake News Detection
        </DatasetTitle>
        <DatasetDescription>
          The <DatasetName>
            <DatasetLink href="https://data.mendeley.com/datasets/k5pbz9795f/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              "MultiBanFakeDetect"
            </DatasetLink>
          </DatasetName> dataset consists of a total of 9,600 text-image instances from online forums, news websites, and social media. Covering political, social, Technology, and entertainment themes, the dataset offers balanced real and fake instances. It includes a balanced set of real and fake news examples, with 7,680 instances for training, 960 for testing, and 960 for validation. The dataset covers different types of fake news—misinformation, rumors, and clickbait—as well as non-fake news, ensuring a comprehensive representation of various types of content. The dataset is also categorized into 12 topics, including entertainment, sports, politics, and more, with equal distribution across all categories for balanced evaluation.
        </DatasetDescription>
        <DatasetStats>
          <StatItem>
            <TrendingUp size={16} />
            9,600 instances
          </StatItem>
          <StatItem>
            <FileText size={16} />
            12 topics
          </StatItem>
          <StatItem>
            <Database size={16} />
            Text-Image
          </StatItem>
        </DatasetStats>
      </DatasetItem>
    </DatasetsContainer>
  );
};

export default Datasets; 