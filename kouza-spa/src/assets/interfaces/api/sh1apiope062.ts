import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE062。
 * オペレータ情報追加・更新APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE062RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: ステータス
   * キー必須: N | 値必須: N
   */
  operatorStatus?: string;

  /**
   * 項目名: 処理タイプ
   * キー必須: Y | 値必須: Y
   */
  shoriType: string;

  /**
   * 項目名: 担当者情報
   * キー必須: N | 値必須: N
   */
  operatorInfo?: {
    /**
     * 項目名: 担当者ID
     * キー必須: Y | 値必須: Y
     */
    operatorId: string;

    /**
     * 項目名: 担当者氏名
     * キー必須: N | 値必須: N
     */
    operatorName?: string;

    /**
     * 項目名: NCO拠点
     * キー必須: N | 値必須: N
     */
    branchName?: string;

    /**
     * 項目名: 業務スキルコードリスト
     * キー必須: N | 値必須: N
     */
    businessRoleNoList?: string[];
    /**
     * 項目名: 業務スキルコード
     * キー必須: N | 値必須: N
     */
    businessRoleNo?: string;

    /**
     * 項目名: 権限スキル
     * キー必須: N | 値必須: N
     */
    authorityCD?: string;

    /**
     * 項目名: 削除フラグ
     * キー必須: N | 値必須: N
     */
    deleteFlag?: string;

    /**
     * 項目名: SMTPアドレス
     * キー必須: N | 値必須: N
     */
    smtpAddress?: string;
  };
}

/**
 * API ID: SH1APIOPE062。
 * オペレータ情報追加・更新APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE062ResponseBody extends ApiResponseBodyBase {
  /**
   * 項目名: ステータス
   * キー必須: N | 値必須: N
   */
  operatorStatus?: string;
}
