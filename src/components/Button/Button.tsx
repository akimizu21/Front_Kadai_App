/**
 * Button
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
/* styles */
import styles from './Button.module.css';

interface ButtonProps {
  label: string; //ラベルは外部から指定可能
  onClick?: () => void; //クリック時に発火する関数を指定
  disabled?: boolean; // ボタンの非活性状態を指定
  loading?: boolean; // ローディング状態を指定
  focusable?: boolean; //フォーカスを当てるか指定
  type?: 'button' | 'submit' | 'reset'; //ボタンのタイプ（submit, button, reset）可能
  href?: string; //リンクとして振る舞う
  target?: '_blank' | '_self' | '_parent' | '_top'; // リンクのターゲット
  variant?: 'primary' | 'secondary' | 'tertiary'; // ボタンのデザインバリエーション
  icon?: IconDefinition; // アイコンの指定
  iconPosition?: 'left' | 'right'; // アイコンの位置を指定
  height?: string; //ボタンの高さ
  width?: string; //ボタンの横幅
}

/**
 * Button
 * @param param0 
 * @returns 
 */
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false, //デフォルトは非活性状態ではない
  loading = false, // デフォルトはローディング状態ではない
  focusable = false, // デフォルトはフォーカスをあてない
  type = 'button',
  href,
  target,
  variant = 'primary',  // デフォルトは'primary'
  icon,
  iconPosition = 'left', // デフォルトは左
  height,
  width,
}) => {
  const buttonContent =  label; // ボタンの内容（ラベル）
  const buttonClass = `${styles.button} ${styles[variant]} ${focusable ? '' : styles.nonFocusable}`;  // デザインのバリエーションに応じたクラス名

  const style: React.CSSProperties = {
    height,
    width,
  }

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && <FontAwesomeIcon icon={icon} className={styles.icon} />}
      <span>{buttonContent}</span>
      {icon && iconPosition === 'right' && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    </>
  );

  // ボタンがリンクとして振る舞う場合
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={buttonClass} // ボタンのクラスを適用
        aria-disabled={disabled} // 非活性状態をARIA属性で指定
        tabIndex={focusable ? 0 : -1} // フォーカス制御
        onClick={disabled ? (e) => e.preventDefault() : onClick} // 非活性の場合はクリックを無効化
        style={style} //親コンポーネントからのスタイルを適用
      >
        {renderContent()}  
      </a>
    );
  }

   // 通常のボタンとして振る舞う場合
  return (
    <button
      type={type}
      className={buttonClass} // ボタンのクラスを適用
      onClick={onClick} // クリック時に発火する関数を指定
      disabled={disabled || loading} // 非活性またはローディング中の場合は無効化
      tabIndex={focusable ? 0 : -1} // フォーカス制御
      style={style} //親コンポーネントからのスタイルを適用
      
    >
      {renderContent()}  
    </button>
  );
};

export default Button;
