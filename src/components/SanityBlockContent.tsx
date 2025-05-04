import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { client } from '../utils/sanityClient';

interface SanityBlockContentProps {
  blocks: any;
}

const SanityBlockContent: React.FC<SanityBlockContentProps> = ({ blocks }) => {
  if (!blocks) {
    return null;
  }

  const serializers = {
    types: {
      block: (props: any) => {
        const { style = 'normal' } = props.node;
        
        switch (style) {
          case 'h1':
            return <h1 className="text-3xl font-bold mt-8 mb-4">{props.children}</h1>;
          case 'h2':
            return <h2 className="text-2xl font-bold mt-6 mb-3">{props.children}</h2>;
          case 'h3':
            return <h3 className="text-xl font-bold mt-5 mb-2">{props.children}</h3>;
          case 'h4':
            return <h4 className="text-lg font-bold mt-4 mb-2">{props.children}</h4>;
          case 'blockquote':
            return <blockquote className="border-l-4 border-purple-500 pl-4 italic my-6">{props.children}</blockquote>;
          default:
            return <p className="mb-4">{props.children}</p>;
        }
      },
      image: (props: any) => {
        return (
          <figure className="my-8">
            <img
              src={props.node.asset.url}
              alt={props.node.alt || ''}
              className="w-full rounded-lg"
            />
            {props.node.caption && (
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {props.node.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
    marks: {
      link: ({ mark, children }: any) => {
        const { href } = mark;
        return (
          <a 
            href={href} 
            className="text-purple-700 hover:text-purple-900 underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      },
      strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
    },
    list: (props: any) => {
      const { type } = props;
      if (type === 'bullet') {
        return <ul className="list-disc pl-6 mb-4">{props.children}</ul>;
      }
      return <ol className="list-decimal pl-6 mb-4">{props.children}</ol>;
    },
    listItem: (props: any) => <li className="mb-1">{props.children}</li>,
  };

  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      projectId={client.config().projectId}
      dataset={client.config().dataset}
    />
  );
};

export default SanityBlockContent;
