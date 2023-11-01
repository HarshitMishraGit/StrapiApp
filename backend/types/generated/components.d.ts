import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutFaQs extends Schema.Component {
  collectionName: 'components_layout_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    questionAnswer: Attribute.Component<'layout.question-answer', true> &
      Attribute.Required;
  };
}

export interface LayoutQuestionAnswer extends Schema.Component {
  collectionName: 'components_layout_question_answers';
  info: {
    displayName: 'QuestionAnswer';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface SeoSeoInfo extends Schema.Component {
  collectionName: 'components_seo_seo_infos';
  info: {
    displayName: 'SEO-INFO';
    icon: 'code';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    meta_description: Attribute.Text & Attribute.Required;
    keywords: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.fa-qs': LayoutFaQs;
      'layout.question-answer': LayoutQuestionAnswer;
      'seo.seo-info': SeoSeoInfo;
    }
  }
}
