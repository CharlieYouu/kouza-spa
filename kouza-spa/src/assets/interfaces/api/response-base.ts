/**
 * レスポンス・ボディ共通部
 * @author Charlie
 */
export interface ApiResponseBodyBase {
  /* 応答共通ヘッダ */
  commonResponseHeader?: {
    /**
     * 項目名：エラー・コード
     * 概要：
     *  5桁の半角文字列
     *  エラーの場合必須項目とする。
     *  業務チェック：該当チェックIDの下5桁をエラー・コードとして設定する。
     *  システムエラー：(固定)’99999'
     * キー必須:N | 値必須:N
     */
    errorCode?: string;

    /**
     * 項目名：エラー・メッセージ
     * 概要：
     *  1桁以上256桁以内の任意の文字列(長さ 0 の文字列も許可)
     *  エラーの場合必須項目とする。
     *  システムエラーの場合に、詳細エラーメッセージを記載する。
     * キー必須:N | 値必須:N
     */
    errorMessage?: string;

    /**
     * 項目名：ユーザー・カスタマイズ可能フィールド
     * 概要：
     *  文字種チェック無し、任意の長さの文字列
     *  設定不要
     * キー必須:N | 値必須:N
     */
    userString?: string;

    /**
     * 項目名：ユーザー・カスタマイズ可能マップ
     * 概要：
     *  文字種チェック無し、任意の長さの文字列のマップ
     *   設定不要
     * キー必須:N | 値必須:N
     */
    userMap?: { [key: string]: string };
  };
}
