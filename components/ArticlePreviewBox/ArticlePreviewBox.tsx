import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import styles from './ArticlePreviewBox.module.css';
import Button from '../Button/Button';

interface IProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export const ArticlePreviewBox = ({
  title,
  content,
  createdAt,
  id,
}: IProps) => {
  const router = useRouter();
  let createdAtString = "";

  if (createdAt && !isNaN(Date.parse(createdAt))) {
    createdAtString = new Date(Date.parse(createdAt)).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  } else {
    createdAtString = "Invalid Date";
  }

  return (
    <div data-cypress={'article-box'} className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.header}>
          <div className={styles.title}>
            <p>{title}</p>
            <p className={styles.createdAt}>
              {' '}
              Added: {createdAtString}
            </p>
          </div>
          {/* <div className={styles.buttonContainer}>
            <Button
              label="Gallery"
              onClick={() => router.push('/gallery/')}
              buttonColor="bg-blue-500"
              textColor="text-white"
              className={styles.buttonRead}
            />
          </div> */}
        </div>
        <ReactMarkdown
          className={styles.content}
          components={{
            strong: ({ node, ...props }) => {
              return <strong className="font-bold" {...props} />;
            },
            a: ({ node, ...props }) => {
              return (
                <a
                  target="_blank"
                  className="text-blue-500 font-bold m-0 p-0 underline"
                  {...props}
                />
              );
            },
            em: ({ node, ...props }) => {
              return <p className="italic inline-block" {...props} />;
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
