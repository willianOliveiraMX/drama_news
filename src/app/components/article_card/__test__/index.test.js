import { render, screen } from '@testing-library/react';
import ArticleCard from '../index';
import article_card_mock from './article_card.mock';

describe('ArticleCard Component', () => {
  it('renders correctly', () => {
    render(<ArticleCard article_content={article_card_mock[0]} />);
    
    const titleElement = screen.getByText(article_card_mock[0].title);
    const subtitleElement = screen.getByText(article_card_mock[0].subtitle);
    const typeElement = screen.getByText(article_card_mock[0].type);
    const authorElement = screen.getByText(`Por ${article_card_mock[0].author.name}`, { exact: false });

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
  });

  it('renders the correct link', () => {
    render(<ArticleCard article_content={article_card_mock[0]} />);
    
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', article_card_mock[0].slug);
  });

  it('formats the published date correctly', () => {
    render(<ArticleCard article_content={article_card_mock[0]} />);
    
    const expectedDate = new Date(article_card_mock[0].dates.published_at)
      .toLocaleDateString(article_card_mock[0].locale, {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    
    const dateElement = screen.getByText(expectedDate, { exact: false });
    expect(dateElement).toBeInTheDocument();
  });

  it('renders multiple article cards with different content', () => {
    const { rerender } = render(<ArticleCard article_content={article_card_mock[0]} />);
    
    expect(screen.getByText(article_card_mock[0].title)).toBeInTheDocument();
    expect(screen.getByText(article_card_mock[0].type)).toBeInTheDocument();
    
    rerender(<ArticleCard article_content={article_card_mock[1]} />);
    
    expect(screen.getByText(article_card_mock[1].title)).toBeInTheDocument();
    expect(screen.getByText(article_card_mock[1].type)).toBeInTheDocument();
  });

  it('handles article without cover image gracefully', () => {
    const articleWithoutImage = {
      ...article_card_mock[0],
      midia: {}
    };
    
    render(<ArticleCard article_content={articleWithoutImage} />);
    
    const titleElement = screen.getByText(articleWithoutImage.title);
    expect(titleElement).toBeInTheDocument();
  });
});
