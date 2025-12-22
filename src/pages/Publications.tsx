import React, { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink, FileText, Code, Database, Quote, Eye, Copy, X } from 'lucide-react';

const PublicationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const HeaderText = styled.p`
  color: #333;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const EqualContribution = styled.span`
  color: #4A628A;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-style: italic;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
`;

const YearSection = styled.div`
  margin-bottom: 4rem;
`;

const YearTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const PublicationItem = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A, #B9E5E8);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const PublicationTitle = styled.h3`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
`;

const PublicationAuthors = styled.p`
  color: #475569;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const PublicationVenue = styled.p`
  color: #64748b;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const PublicationLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1.5rem;
`;

const PublicationButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(189, 241, 250, 0.8), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.abstract {
    background: linear-gradient(135deg,#E195AB,#E14434);
    color: white;
  }
  
  &.citation {
    background: linear-gradient(135deg, #10b981, #A6B28B);
    color: white;
  }
`;

const PublicationLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  

  &.pdf {
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    color: white;
  }
  
  &.code {
    background: linear-gradient(135deg,#52357B,#898AC4);;
    color: white;
  }
  
  &.dataset {
    background: linear-gradient(135deg,#415E72,#67b2e6);
    color: white;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
    text-decoration: none;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 12px;
  
  &.accepted {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }
  
  &.under-review {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }
  
  &.submitted {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
  }
  &.rejected {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
  }
  &.preprint {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
  
  }
  &.published {
    background: linear-gradient(135deg, #f45e5eff, #e76565ff);
    color: white;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

const ModalTitle = styled.h3`
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f1f5f9;
    color: #1e293b;
  }
`;

const ModalBody = styled.div`
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
`;

const CopyButton = styled.button`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }
`;
// const strong = styled.b`
// font-weight: bold;
// color: '#10b981'

// `;
const Publications: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ type: 'abstract' | 'citation', title: string, content: string } | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy to clipboard');
    });
  };

  const openModal = (type: 'abstract' | 'citation', title: string, content: string) => {
    setModalContent({ type, title, content });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <PublicationsContainer>
      <Header>
        <HeaderText>
          Most recent publication updates can be found on my{' '}
          <a href="https://scholar.google.com/citations?user=tU258wwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', fontWeight: '600'}}>
            <em>Google Scholar</em>
          </a>{' '}
          profile.
        </HeaderText>
        <EqualContribution>[*] denotes equal contribution</EqualContribution>
      </Header>
      <YearSection>
        <YearTitle>2025</YearTitle>
        <PublicationItem>
          <PublicationTitle>
            MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts
            <StatusBadge className="published">Q1 Journal</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Md Arafat Alam Khandaker, Zayeed Hasan, Niful Islam, Khan Md Hasib,  and M. F. Mridha
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Published in International Journal of Information Management Data Insights</em> (<a href="https://www.sciencedirect.com/journal/international-journal-of-information-management-data-insights" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>International Journal of Information Management Data Insights</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'MultiBanFakeDetect', 'The rise of false news in recent years poses significant risks to society. As misinformation spreads rapidly, automated detection systems are essential to mitigate its impact. However, most existing methods rely solely on textual analysis, limiting their effectiveness. The challenge is further compounded by the lack of a large-scale, multimodal dataset for Bangla fake news detection, as existing datasets are either small or unimodal. To address this, we introduce MultiBanFakeDetect, a novel multimodal dataset integrating both textual and visual information. This dataset comprises manually curated real and fake news samples from various online sources. Additionally, we propose MultiFusionFake, a hybrid multimodal fake news detection framework that fuses text and image modalities using an Early Fusion approach while also comparing Late and Intermediate fusion techniques. Our experiments show that MultiFusionFake, combining DenseNet-169 and mBERT, achieves 79.69% accuracy, outperforming the text-only mBERT model’s 73.13%, reflecting a 6.56 percentage point improvement. These results underscore the advantages of multimodal over unimodal methods. To the best of our knowledge, this is the first study on multimodal fake news detection in the under-resourced Bangla context, offering a promising approach to combating online misinformation.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className="pdf" href="https://www.sciencedirect.com/science/article/pii/S2667096825000291" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink className="code" href="https://github.com/fatemafaria142/MultiBanFakeDetect-An-Extensive-Benchmark-Dataset-for-Multimodal-Bangla-Fake-News-Detection" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink className="dataset" href="https://data.mendeley.com/datasets/k5pbz9795f/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'MultiBanFakeDetect', '@article{MultiBanFakeDetect,\n  title={MultiBanFakeDetect: Integrating advanced fusion techniques for multimodal detection of Bangla fake news in under-resourced contexts},\n  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Hasan, Zayeed and Khandaker, Md Arafat Alam and Islam, Niful and Hasib, Khan Md and Mridha, MF},\n  journal={International Journal of Information Management Data Insights},\n volume={5},\n number={2},\n  pages={100347},\n  year={2025},\n publisher={Elsevier}\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>
        <PublicationItem>
          <PublicationTitle>
              BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language
            <StatusBadge className="published">Q1 Journal</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Busra Kamal Rafa, Swarnajit Saha, Md. Mahfuzur Rahman, Khan Md Hasib, and M. F. Mridha
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Published in  International Journal of Disaster Risk Reduction (Q1)</em> (<a href="https://www.sciencedirect.com/journal/international-journal-of-disaster-risk-reduction" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>Disaster Risk Reduction</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'BanglaCalamityMMD', 'The abundance of social media datasets with crisis messages has greatly impacted disaster response and assessment. Extracting vital information from this data is crucial for enhancing situational awareness and enabling rapid decision-making, necessitating robust techniques to filter out misleading and irrelevant content. This study introduces a hybrid multimodal fusion technique that integrates text and image data to identify relevant disaster-related images from social media. It represents a pioneering effort in multimodal disaster identification for the Bangla language, addressing a significant gap where previous research has focused exclusively on English text. To facilitate this leap, We curated the “BanglaCalamityMMD” dataset, which includes 7,903 data points distributed across seven disaster categories such as Earthquake, Flood, Landslides, Wildfires, Tropical Storms, Droughts, and Human Damage, along with a non-disaster category. Our technique employs advanced deep learning methodologies: DisasterTextNet for text-based disaster detection, DisasterImageNet for image-based disaster categorization, and DisasterMultiFusionNet, which combines text and image modalities using fusion techniques like Early Fusion, Late Fusion, and Intermediate Fusion. The system uses Vision Transformer variations to extract visual data and pre-trained BERT models for textual insights. Our multimodal architecture (DisasterMultiFusionNet) significantly outperforms unimodal approaches. The unimodal text-based approach achieves 79.90% accuracy with mBERT, also the image-based approach reaches 78.65% accuracy using Swin Transformer. In comparison, our multimodal technique achieves 85.25% accuracy with Swin Transformer and mBERT (DisasterMultiFusionNet), showing a 5.35% improvement over the best unimodal approach. This highlights the effectiveness of our fusion technique and the reliability of our multimodal framework in enhancing disaster identification accuracy. To our knowledge, this is the first research on multimodal disaster identification in the low-resource Bangla language context.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className='pdf' href="#" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink className="code" href="https://github.com/Mukaffi28/BanglaCalamityMMD-A-Comprehensive-Benchmark-Dataset-for-Multimodal-Disaster-Identification" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink className="dataset" href="https://data.mendeley.com/datasets/7dggbjn5sd/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'BanglaCalamityMMD', '@article{BanglaCalamityMMD,\n  title={BanglaCalamityMMD: A comprehensive benchmark dataset for multimodal disaster identification in the low-resource Bangla language},\n  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Rafa, Busra Kamal and Saha, Swarnajit and Rahman, Md Mahfuzur and Hasib, Khan Md and Mridha, MF},\n  journal={International Journal of Disaster Risk Reduction},\n  volume={130},\n  pages={105800},\n  year={2025},\n  issn={2212-4209},\n  doi={https://doi.org/10.1016/j.ijdrr.2025.105800},\n  url={https://www.sciencedirect.com/science/article/pii/S2212420925006247},\n  keywords={Multimodal disaster identification, Bangla language, Low-resource, Social media, Text and image fusion, Deep learning, Disaster analysis}\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>
        
        <PublicationItem>
          <PublicationTitle>
              MindSpeak-Bangla: A HumanLLM Collaborative Dataset for Chain-of-Thought Adaptation in Bangla Mental Health Advice Generation
          <StatusBadge className="published">Q1 Journal</StatusBadge> <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Md. Mahfuzur Rahman, Khan Md Hasib, Md. Jakir Hossen, and M. F. Mridha.
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Under Review in IEEE Open Journal of the Computer Society</em> (<a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8782664" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>IEEE ComSoc</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'MindSpeak', 'Not published yet')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className='pdf' href="#" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink className="code" href="#" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink className="dataset" href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'MindSpeak', 'Not published yet')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>

        <PublicationItem>
          <PublicationTitle>
              FanSpeak: A Bangla Dataset for Multi-Class Toxicity Detection in Sports Discourse and a Comparative Evaluation of PLMs and LLMs
          <StatusBadge className="published">Q1 Journal</StatusBadge> <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Md. Arafat Alam Khandaker*, Ziyan Shirin Raha*, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin*</strong>, Dipta Biswas, and Khan Md Hasib
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Under Review in Information Processing & Management</em> (<a href="https://www.sciencedirect.com/journal/information-processing-and-management" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>Information Processing & Management</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'FanSpeak', 'Not published yet')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className='pdf' href="#" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink className="code" href="#" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink className="dataset" href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'FanSpeak', 'Not published yet')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>
      </YearSection>
      <YearSection>
        <YearTitle>2024</YearTitle>
      
        <PublicationItem>
          <PublicationTitle>
              Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language
            <StatusBadge className="published">Q1 Journal</StatusBadge><StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Ahmed Al Wase, Mehidi Ahmmed, Md Rabius Sani, and Tashreef Muhammad.
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Under Review in Array (Q1)</em> (<a href="https://www.sciencedirect.com/journal/array" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>Array</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'Vashantor', 'The Bangla linguistic variety is a fascinating mix of regional dialects that adds to the cultural diversity of the Bangla-speaking community. Despite extensive study into translating Bangla to English, English to Bangla, and Banglish to Bangla in the past, there has been a noticeable gap in translating Bangla regional dialects into standard Bangla. In this study, we set out to fill this gap by creating a collection of 32,500 sentences, encompassing Bangla, Banglish, and English, representing five regional Bangla dialects. Our aim is to translate these regional dialects into standard Bangla and detect regions accurately. To achieve this, we proposed models known as mT5 and BanglaT5 for translating regional dialects into standard Bangla. Additionally, we employed mBERT and Bangla-bert-base to determine the specific regions from where these dialects originated. Our experimental results showed the highest BLEU score of 69.06 for Mymensingh regional dialects and the lowest BLEU score of 36.75 for Chittagong regional dialects. We also observed the lowest average word error rate of 0.1548 for Mymensingh regional dialects and the highest of 0.3385 for Chittagong regional dialects. For region detection, we achieved an accuracy of 85.86% for Bangla-bert-base and 84.36% for mBERT. This is the first large-scale investigation of Bangla regional dialects to Bangla machine translation. We believe our findings will not only pave the way for future work on Bangla regional dialects to Bangla machine translation, but will also be useful in solving similar language-related challenges in low-resource language conditions.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink href="https://arxiv.org/pdf/2311.11142" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/Mukaffi28/Vashantor-A-Large-scale-Multilingual-Benchmark-Dataset" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="https://data.mendeley.com/datasets/bj5jgk878b/2" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'Vashantor', '@misc{faria2023vashantor,\n  title={Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language},\n  author={Fatema Tuj Johora Faria and Mukaffi Bin Moin and Ahmed Al Wase and Mehidi Ahmmed and Md. Rabius Sani and Tashreef Muhammad},\n  year={2023},\n  eprint={2311.11142},\n  archivePrefix={arXiv},\n  primaryClass={cs.CL}\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>        
        <PublicationItem>
          <PublicationTitle>
              Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria*, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin*</strong>, Rabeya Islam Mumu, Md Mahabubul Alam Abir, Abrar Nawar Alfy and Mohammad Shafiul Alam
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Conference:</strong> <em>Published in The IEEE Region 10 Symposium (TENSYMP 2024)</em> (<a href="https://ieeedelhi-tensymp2024.org/" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>TENSYMP 2024</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'Motamot', 'Sentiment analysis is the process of identifying and categorizing people\'s emotions or opinions regarding various topics. Analyzing political sentiment is critical for understanding the complexities of public opinion processes, especially during election seasons. It gives significant information on voter preferences, attitudes, and current trends. In this study, we investigate political sentiment analysis during Bangladeshi elections, specifically examining how effectively Pre-trained Language Models (PLMs) and Large Language Models (LLMs) capture complex sentiment characteristics. Our study centers on the creation of the "Motamot" dataset, comprising 7,058 instances annotated with positive and negative sentiments, sourced from diverse online newspaper portals, forming a comprehensive resource for political sentiment analysis. We meticulously evaluate the performance of various PLMs including BanglaBERT, Bangla BERT Base, XLM-RoBERTa, mBERT, and sahajBERT, alongside LLMs such as Gemini 1.5 Pro and GPT 3.5 Turbo. Moreover, we explore zero-shot and few-shot learning strategies to enhance our understanding of political sentiment analysis methodologies. Our findings underscore BanglaBERT\'s commendable accuracy of 88.10% among PLMs. However, the exploration into LLMs reveals even more promising results. Through the adept application of Few-Shot learning techniques, Gemini 1.5 Pro achieves an impressive accuracy of 96.33%, surpassing the remarkable performance of GPT 3.5 Turbo, which stands at 94%. This underscores Gemini 1.5 Pro\'s status as the superior performer in this comparison.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink href="https://arxiv.org/pdf/2407.19528" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/Mukaffi28/Bengali-Political-Sentiment-Analysis" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="https://data.mendeley.com/datasets/hdhnrrwdz2/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'Motamot', '@misc{faria2024motamotdatasetrevealingsupremacy,\n  title={Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis}, \n  author={Fatema Tuj Johora Faria and Mukaffi Bin Moin and Rabeya Islam Mumu and Md Mahabubul Alam Abir and Abrar Nawar Alfy and Mohammad Shafiul Alam},\n  year={2024},\n  eprint={2407.19528},\n  archivePrefix={arXiv},\n  primaryClass={cs.CL},\n  url={https://arxiv.org/abs/2407.19528}\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>

        <PublicationItem>
          <PublicationTitle>
              Assessing the Level of Toxicity Against Distinct Groups in Bangla Social Media Comments: A Comprehensive Investigation
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Pronay Debnath, Usafa Akther Rifa, Rijeet Bin Anis
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Conference:</strong> <em>Published in 18th International Conference on Information Technology and Applications (ICITA 2024)</em> (<a href="https://link.springer.com/book/10.1007/978-981-96-1758-6" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>ICITA 2024</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'Assessing the Level of Toxicity', 'Social media platforms have a vital role in the modern world, serving as conduits for communication, the exchange of ideas, and the establishment of networks. However, the misuse of these platforms through toxic comments, which can range from offensive remarks to hate speech, is a concerning issue. This study focuses on identifying toxic comments in the Bengali language targeting three specific groups: transgender people, indigenous people, and migrant people, from multiple social media sources. The study delves into the intricate process of identifying and categorizing toxic language while considering the varying degrees of toxicity: high, medium, and low. The methodology involves creating a dataset, manual annotation, and employing pre-trained transformer models like Bangla-BERT, bangla-bert-base, distil-BERT, and Bert-base-multilingual-cased for classification. Diverse assessment metrics such as accuracy, recall, precision, and F1-score are employed to evaluate the model\'s effectiveness. The experimental findings reveal that Bangla-BERT surpasses alternative models, achieving an F1-score of 0.8903. This research exposes the complexity of toxicity in Bangla social media dialogues, revealing its differing impacts on diverse demographic groups.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink href="https://arxiv.org/pdf/2409.17130" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'Assessing the Level of Toxicity', '@InProceedings{10.1007/978-981-96-1758-6_46,\n  author="Moin, Mukaffi Bin\n  and Debnath, Pronay\n  and Rifa, Usafa Akther\n  and Anis, Rijeet Bin",\n  editor="Ullah, Abrar\n  and Anwar, Sajid",\n  title="Assessing the Level of Toxicity Against Distinct Groups in Bangla Social Media Comments: A Comprehensive Investigation",\n  booktitle="Proceedings of International Conference on Information Technology and Applications",\n  year="2025",\n  publisher="Springer Nature Singapore",\n  address="Singapore",\n  pages="557--569",\n  isbn="978-981-96-1758-6"\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>

        <PublicationItem>
          <PublicationTitle>
              Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Md. Mahfuzur Rahman, Md Morshed Alam Shanto, Asif Iftekher Fahim and Md. Moinul Hoque
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Conference:</strong> <em>Published in 18th International Conference on Information Technology and Applications (ICITA 2024)</em> (<a href="https://link.springer.com/book/10.1007/978-981-96-1758-6" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>ICITA 2024</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'Uddessho', 'With the increasing popularity of daily information sharing and acquisition on the Internet, this paper introduces an innovative approach for intent classification in Bangla language, focusing on social media posts where individuals share their thoughts and opinions. The proposed method leverages multimodal data with particular emphasis on authorship identification, aiming to understand the underlying purpose behind textual content, especially in the context of varied user-generated posts on social media. Current methods often face challenges in low-resource languages like Bangla, particularly when author traits intricately link with intent, as observed in social media posts. To address this, we present the Multimodal-based Author Bangla Intent Classification (MABIC) framework, utilizing text and images to gain deeper insights into the conveyed intentions. We have created a dataset named "Uddessho," comprising 3,048 instances sourced from social media. Our methodology comprises two approaches for classifying textual intent and multimodal author intent, incorporating early fusion and late fusion techniques. In our experiments, the unimodal approach achieved an accuracy of 64.53% in interpreting Bangla textual intent. In contrast, our multimodal approach significantly outperformed traditional unimodal methods, achieving an accuracy of 76.19%. This represents an improvement of 11.66%. To our best knowledge, this is the first research work on multimodal-based author intent classification for low-resource Bangla language social media posts.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink href="https://arxiv.org/pdf/2409.09504" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/fatemafaria142/Uddessho-An-Benchmark-Dataset-for-Multimodal-Author-Intent-Classification-in-Bangla-Language" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="https://data.mendeley.com/datasets/mzxmt8tfjs/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'Uddessho', '@InProceedings{10.1007/978-981-96-1758-6_32,\n  author="Faria, Fatema Tuj Johora\n  and Moin, Mukaffi Bin\n  and Rahman, Md. Mahfuzur\n  and Shanto, Md. Morshed Alam\n  and Fahim, Asif Iftekher\n  and Hoque, Md. Moinul",\n  editor="Ullah, Abrar\n  and Anwar, Sajid",\n  title="Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language",\n  booktitle="Proceedings of International Conference on Information Technology and Applications",\n  year="2025",\n  publisher="Springer Nature Singapore",\n  address="Singapore",\n  pages="383--393",\n  isbn="978-981-96-1758-6"\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>




        <PublicationItem>
          <PublicationTitle>
              Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study
           
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Asif Iftekher Fahim, Pronay Debnath, Faisal Muhammad Shah
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Conference:</strong> <em>Published in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</em> (<a href="https://icccn.co.uk/" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>ICCCNet 2024</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'Unraveling the Dominance of LLMs', 'Natural Language Inference (NLI) is a cornerstone of Natural Language Processing (NLP), providing insights into the entailment relationships between text pairings. It is a critical component of Natural Language Understanding (NLU), demonstrating the ability to extract information from spoken or written interactions. NLI is mainly concerned with determining the entailment relationship between two statements, known as the premise and hypothesis. When the premise logically implies the hypothesis, the pair is labeled "entailment". If the hypothesis contradicts the premise, the pair receives the "contradiction" label. When there is insufficient evidence to establish a connection, the pair is described as "neutral". Despite the success of Large Language Models (LLMs) in various tasks, their effectiveness in NLI remains constrained by issues like low-resource domain accuracy, model overconfidence, and difficulty in capturing human judgment disagreements. This study addresses the underexplored area of evaluating LLMs in low-resourced languages such as Bengali. Through a comprehensive evaluation, we assess the performance of prominent LLMs and state-of-the-art (SOTA) models in Bengali NLP tasks, focusing on natural language inference. Utilizing the XNLI dataset, we conduct zero-shot and few-shot evaluations, comparing LLMs like GPT-3.5 Turbo and Gemini 1.5 Pro with models such as BanglaBERT, Bangla BERT Base, DistilBERT, mBERT, and sahajBERT. Our findings reveal that while LLMs can achieve comparable or superior performance to fine-tuned SOTA models in few-shot scenarios, further research is necessary to enhance our understanding of LLMs in languages with modest resources like Bengali. This study underscores the importance of continued efforts in exploring LLM capabilities across diverse linguistic contexts')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink href="https://arxiv.org/pdf/2405.02937" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/fatemafaria142/Large-Language-Models-Over-Transformer-Models-for-Bangla-NLI" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'Unraveling the Dominance of LLMs', '@misc{faria2024unravelingdominancelargelanguage,\n  title={Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study}, \n  author={Fatema Tuj Johora Faria and Mukaffi Bin Moin and Asif Iftekher Fahim and Pronay Debnath and Faisal Muhammad Shah},\n  year={2024},\n  eprint={2405.02937},\n  archivePrefix={arXiv},\n  primaryClass={cs.CL},\n  url={https://arxiv.org/abs/2405.02937}\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>

        <PublicationItem>
          <PublicationTitle>
              Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification
              
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Fatema Tuj Johora Faria, Swarnajit Saha, Busra Kamal Rafa, Mohammad Shafiul Alam
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Conference:</strong> <em>Published in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)</em> (<a href="https://icccn.co.uk/" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>ICCCNet 2024</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'Exploring Explainable AI for Cancer Classification', 'Lung and colon cancer are serious worldwide health challenges that require early and precise identification to reduce mortality risks. However, diagnosis, which is mostly dependent on histopathologists\' competence, presents difficulties and hazards when expertise is insufficient. While diagnostic methods like imaging and blood markers contribute to early detection, histopathology remains the gold standard, although time-consuming and vulnerable to inter-observer mistakes. Limited access to high-end technology further limits patients\' ability to receive immediate medical care and diagnosis. Recent advances in deep learning have generated interest in its application to medical imaging analysis, specifically the use of histopathological images to diagnose lung and colon cancer. The goal of this investigation is to use and adapt existing pre-trained CNN-based models, such as Xception, DenseNet201, ResNet101, InceptionV3, DenseNet121, DenseNet169, ResNet152, and InceptionResNetV2, to enhance classification through better augmentation strategies. The results show tremendous progress, with all eight models reaching impressive accuracy ranging from 97% to 99%. Furthermore, attention visualization techniques such as GradCAM, GradCAM++, ScoreCAM, Faster Score-CAM, and LayerCAM, as well as Vanilla Saliency and SmoothGrad, are used to provide insights into the models\' classification decisions, thereby improving interpretability and understanding of malignant and benign image classification.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink href="https://arxiv.org/pdf/2405.04610" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/Mukaffi28/Explainable-AI-for-Lung-and-Colon-Cancer-Classification" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'Exploring Explainable AI for Cancer Classification', '@misc{moin2024exploringexplainableaitechniques,\n  title={Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification}, \n  author={Mukaffi Bin Moin and Fatema Tuj Johora Faria and Swarnajit Saha and Busra Kamal Rafa and Mohammad Shafiul Alam},\n  year={2024},\n  eprint={2405.04610},\n  archivePrefix={arXiv},\n  primaryClass={eess.IV},\n  url={https://arxiv.org/abs/2405.04610}\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>        
        <PublicationItem>
          <PublicationTitle>
              BanglaMemeEvidence: A Multimodal Benchmark Dataset for Explanatory Evidence Detection in Bengali Memes
            <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Asif Iftekher Fahim, Pronay Debnath, and Faisal Muhammad Shah.
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Conference:</strong> <em>Under Review in 2025 9th International Conference on Vision, Image and Signal Processing</em>
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'BanglaMemeEvidence', 'Not published yet')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className='pdf' href="#" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'BanglaMemeEvidence', 'Not published yet')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>

        <PublicationItem>
          <PublicationTitle>
              Tackling Hallucination in Bengali NLP: Enhancing Paraphrase Generation, Reading Comprehension, and Formal Application Writing Using LLMs with Few-Shot Learning, Fine-Tuning, and RAG
            <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Saidur Rahman Sujon, Ahmadul Karim Chowdhury, Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong> and Faisal Muhammad Shah
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Conference:</strong> <em>Under Review in 29TH INTERNATIONAL COMPUTER SCIENCE AND ENGINEERING CONFERENCE</em>
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'Tackling Hallucination in Bengali NLP', 'Not published yet')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className='pdf' href="#" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'Tackling Hallucination in Bengali NLP', 'Not published yet')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>



        <PublicationItem>
          <PublicationTitle>
              PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification
            <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Mohammad Shafiul Alam*, Fatema Tuj Johora Faria*, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>*, Ahmed Al Wase, Md. Rabius Sani and Khan Md Hasib
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Conference:</strong> <em>Under Review in IEEEi-COSTE 2025</em> (<a href="https://i-coste.org/" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>Journal of Intelligent Information Systems</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'PotatoGANs', 'Numerous applications have resulted from the automation of agricultural disease segmentation using deep learning techniques. However, when applied to new conditions, these applications frequently face the difficulty of overfitting, resulting in lower segmentation performance. In the context of potato farming, where diseases have a large influence on yields, it is critical for the agricultural economy to quickly and properly identify these diseases. Traditional data augmentation approaches, such as rotation, flip, and translation, have limitations and frequently fail to provide strong generalization results. To address these issues, our research employs a novel approach termed as PotatoGANs. In this novel data augmentation approach, two types of Generative Adversarial Networks (GANs) are utilized to generate synthetic potato disease images from healthy potato images. This approach not only expands the dataset but also adds variety, which helps to enhance model generalization. Using the Inception score as a measure, our experiments show the better quality and realisticness of the images created by PotatoGANs, emphasizing their capacity to resemble real disease images closely. The CycleGAN model outperforms the Pix2Pix GAN model in terms of image quality, as evidenced by its higher IS scores CycleGAN achieves higher Inception scores (IS) of 1.2001 and 1.0900 for black scurf and common scab, respectively. This synthetic data can significantly improve the training of large neural networks. It also reduces data collection costs while enhancing data diversity and generalization capabilities. Our work improves interpretability by combining three gradient-based Explainable AI algorithms (GradCAM, GradCAM++, and ScoreCAM) with three distinct CNN architectures (DenseNet169, Resnet152 V2, InceptionResNet V2) for potato disease classification.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink href="https://arxiv.org/pdf/2405.07332" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/Mukaffi28/ExplainableAI-PotatoGAN-Cutting-Edge-Disease-Identification-for-Potatoes" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'PotatoGANs', '@misc{alam2024potatogansutilizinggenerativeadversarial,\n  title={PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification}, \n  author={Mohammad Shafiul Alam and Fatema Tuj Johora Faria and Mukaffi Bin Moin and Ahmed Al Wase and Md. Rabius Sani and Khan Md Hasib},\n  year={2024},\n  eprint={2405.07332},\n  archivePrefix={arXiv},\n  primaryClass={cs.CV},\n  url={https://arxiv.org/abs/2405.07332}\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>



                <PublicationItem>
          <PublicationTitle>
              Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images
            <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Pronay Debnath, Asif Iftekher Fahim, Faisal Muhammad Shah
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Under Review in Journal of Visual Communication and Image Representation</em> (<a href="https://www.sciencedirect.com/journal/journal-of-visual-communication-and-image-representation" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>Journal of Visual Communication and Image Representation</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'Explainable CNN for Retinal Fundus', 'Our research focuses on the critical field of early diagnosis of disease by examining retinal blood vessels in fundus images. While automatic segmentation of retinal blood vessels holds promise for early detection, accurate analysis remains challenging due to the limitations of existing methods, which often lack discrimination power and are susceptible to influences from pathological regions. Our research in fundus image analysis advances deep learning-based classification using eight pre-trained CNN models. To enhance interpretability, we utilize Explainable AI techniques such as Grad-CAM, Grad-CAM++, Score-CAM, Faster Score-CAM, and Layer CAM. These techniques illuminate the decision-making processes of the models, fostering transparency and trust in their predictions. Expanding our exploration, we investigate ten models, including TransUNet with ResNet backbones, Attention U-Net with DenseNet and ResNet backbones, and Swin-UNET. Incorporating diverse architectures such as ResNet50V2, ResNet101V2, ResNet152V2, and DenseNet121 among others, this comprehensive study deepens our insights into attention mechanisms for enhanced fundus image analysis. Among the evaluated models for fundus image classification, ResNet101 emerged with the highest accuracy, achieving an impressive 94.17%. On the other end of the spectrum, EfficientNetB0 exhibited the lowest accuracy among the models, achieving a score of 88.33%. Furthermore, in the domain of fundus image segmentation, Swin-Unet demonstrated a Mean Pixel Accuracy of 86.19%, showcasing its effectiveness in accurately delineating regions of interest within fundus images. Conversely, Attention U-Net with DenseNet201 backbone exhibited the lowest Mean Pixel Accuracy among the evaluated models, achieving a score of 75.87%.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink href="https://arxiv.org/pdf/2405.07338" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/fatemafaria142/Retinal-Fundus-Classification-using-XAI-and-Segmentation" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'Explainable CNN for Retinal Fundus', '@misc{faria2024explainableconvolutionalneuralnetworks,\n  title={Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images}, \n  author={Fatema Tuj Johora Faria and Mukaffi Bin Moin and Pronay Debnath and Asif Iftekher Fahim and Faisal Muhammad Shah},\n  year={2024},\n  eprint={2405.07338},\n  archivePrefix={arXiv},\n  primaryClass={eess.IV},\n  url={https://arxiv.org/abs/2405.07338}\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>
      </YearSection>

      <YearSection>
        <YearTitle>2023</YearTitle>
        


        <PublicationItem>
          <PublicationTitle>
              Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> Fatema Tuj Johora Faria, <strong style={{color: '#10b981'}}>Mukaffi Bin Moin</strong>, Ahmed Al Wase, Md Rabius Sani, Khan Md Hasib, and Mohammad Shafiul Alam.
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Conference:</strong> <em>2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)</em> (<a href="https://ieee-ccwc.org/#" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>CCWC 2023</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'Classification of Potato Disease', 'Potatoes are among the major vegetables in agricultural regions, and it is farmed and utilized all over the world. Potatoes are a high-protein food with several health benefits, but there are numerous diseases associated with potatoes that hamper production. In this research, we developed a hybrid approach that employs image processing and combines MobileNet V2 with LSTM, GRU, and Bidirectional LSTM to evaluate potato disease classes known as Black Scurf, Common Scab, Blackleg, Dry Rot, Pink Rot, Healthy, and Miscellaneous. We examined the outcomes of each architecture after applying it independently to determine the optimal architecture configuration for categorizing potato diseases. In terms of accuracy, the results show that the hybrid MobileNet V2-GRU with Stochastic Gradient Descent optimizer strategy exceeds the other alternative. On the test dataset, we achieved 99% accuracy.')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink href="https://www.researchgate.net/publication/370123763_Classification_of_Potato_Disease_with_Digital_Image_Processing_Technique_A_Hybrid_Deep_Learning_Framework" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/fatemafaria142/Classification-of-Potato-Disease-A-Hybrid-Deep-Learning-Framework" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink href="https://github.com/Mukaffi28/Potato-Disease" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'Classification of Potato Disease', '@INPROCEEDINGS{10099162,\n  author={Faria, Fatema Tuj Johora and Bin Moin, Mukaffi and Al Wase, Ahmed and Sani, Md. Rabius and Hasib, Khan Md and Alam, Mohammad Shafiul},\n  booktitle={2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)}, \n  title={Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework}, \n  year={2023},\n  volume={},\n  number={},\n  pages={0820-0826},\n  keywords={Fungi;Deep learning;Image processing;Digital images;Conferences;Stochastic processes;Training data;Deep learning;Image processing;MobileNet V2;LSTM;GRU;BiLSTM;Disease classification},\n  doi={10.1109/CCWC57344.2023.10099162}\n}')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>


      </YearSection>

      {modalContent && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                {modalContent.type === 'abstract' ? 'Abstract' : 'Citation'} - {modalContent.title}
              </ModalTitle>
              <CloseButton onClick={closeModal}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              {modalContent.type === 'citation' ? (
                <pre style={{ 
                  background: '#f8fafc', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  overflow: 'auto',
                  whiteSpace: 'pre-wrap',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem'
                }}>
                  {modalContent.content}
                </pre>
              ) : (
                <p>{modalContent.content}</p>
              )}
              {modalContent.type === 'citation' && (
                <CopyButton onClick={() => copyToClipboard(modalContent.content)}>
                  <Copy size={16} />
                  Copy Citation
                </CopyButton>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </PublicationsContainer>
  );
};

export default Publications; 