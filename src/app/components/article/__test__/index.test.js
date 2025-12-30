import { render, screen } from '@testing-library/react';
import Article from '../index';
import article_mock from './article.mock';

describe('Article Component', () => {
  it('renders correctly', () => {
    render(<Article article_content={article_mock[0]} />);
    
    const titleElement = screen.getByText(article_mock[0].title);
    const subtitleElement = screen.getByText(article_mock[0].subtitle);
    const authorElement = screen.getByText(`Por ${article_mock[0].author.name}`, { exact: false });

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
  });
});