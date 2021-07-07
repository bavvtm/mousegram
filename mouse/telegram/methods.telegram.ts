/**
 * This File is auto Generated
 * ================================================
 * API Version    : v5.3.0
 * Changelog      : 25/6/2021
 * ================================================
 * @see https://ark0f.github.io/tg-bot-api to access json file
 */

import { _Request } from '../utils/request.utils';
import * as Types from '../types';
export class Methods {

   public async getUpdates(params?: Types.getUpdates) {
      const response = await _Request('getUpdates', { ...params });
      return response;
   }

   public async setWebhook(params?: Types.setWebhook) {
      const response = await _Request('setWebhook', { ...params });
      return response;
   }

   public async deleteWebhook(params?: Types.deleteWebhook) {
      const response = await _Request('deleteWebhook', { ...params });
      return response;
   }

   public async getWebhookInfo(params?: Types.getWebhookInfo) {
      const response = await _Request('getWebhookInfo', { ...params });
      return response;
   }

   public async getMe(params?: Types.getMe) {
      const response = await _Request('getMe', { ...params });
      return response;
   }

   public async logOut(params?: Types.logOut) {
      const response = await _Request('logOut', { ...params });
      return response;
   }

   public async close(params?: Types.close) {
      const response = await _Request('close', { ...params });
      return response;
   }

   public async sendMessage(params?: Types.sendMessage) {
      const response = await _Request('sendMessage', { ...params });
      return response;
   }

   public async forwardMessage(params?: Types.forwardMessage) {
      const response = await _Request('forwardMessage', { ...params });
      return response;
   }

   public async copyMessage(params?: Types.copyMessage) {
      const response = await _Request('copyMessage', { ...params });
      return response;
   }

   public async sendPhoto(params?: Types.sendPhoto) {
      const response = await _Request('sendPhoto', { ...params });
      return response;
   }

   public async sendAudio(params?: Types.sendAudio) {
      const response = await _Request('sendAudio', { ...params });
      return response;
   }

   public async sendDocument(params?: Types.sendDocument) {
      const response = await _Request('sendDocument', { ...params });
      return response;
   }

   public async sendVideo(params?: Types.sendVideo) {
      const response = await _Request('sendVideo', { ...params });
      return response;
   }

   public async sendAnimation(params?: Types.sendAnimation) {
      const response = await _Request('sendAnimation', { ...params });
      return response;
   }

   public async sendVoice(params?: Types.sendVoice) {
      const response = await _Request('sendVoice', { ...params });
      return response;
   }

   public async sendVideoNote(params?: Types.sendVideoNote) {
      const response = await _Request('sendVideoNote', { ...params });
      return response;
   }

   public async sendMediaGroup(params?: Types.sendMediaGroup) {
      const response = await _Request('sendMediaGroup', { ...params });
      return response;
   }

   public async sendLocation(params?: Types.sendLocation) {
      const response = await _Request('sendLocation', { ...params });
      return response;
   }

   public async editMessageLiveLocation(params?: Types.editMessageLiveLocation) {
      const response = await _Request('editMessageLiveLocation', { ...params });
      return response;
   }

   public async stopMessageLiveLocation(params?: Types.stopMessageLiveLocation) {
      const response = await _Request('stopMessageLiveLocation', { ...params });
      return response;
   }

   public async sendVenue(params?: Types.sendVenue) {
      const response = await _Request('sendVenue', { ...params });
      return response;
   }

   public async sendContact(params?: Types.sendContact) {
      const response = await _Request('sendContact', { ...params });
      return response;
   }

   public async sendPoll(params?: Types.sendPoll) {
      const response = await _Request('sendPoll', { ...params });
      return response;
   }

   public async sendDice(params?: Types.sendDice) {
      const response = await _Request('sendDice', { ...params });
      return response;
   }

   public async sendChatAction(params?: Types.sendChatAction) {
      const response = await _Request('sendChatAction', { ...params });
      return response;
   }

   public async getUserProfilePhotos(params?: Types.getUserProfilePhotos) {
      const response = await _Request('getUserProfilePhotos', { ...params });
      return response;
   }

   public async getFile(params?: Types.getFile) {
      const response = await _Request('getFile', { ...params });
      return response;
   }

   public async banChatMember(params?: Types.banChatMember) {
      const response = await _Request('banChatMember', { ...params });
      return response;
   }

   public async unbanChatMember(params?: Types.unbanChatMember) {
      const response = await _Request('unbanChatMember', { ...params });
      return response;
   }

   public async restrictChatMember(params?: Types.restrictChatMember) {
      const response = await _Request('restrictChatMember', { ...params });
      return response;
   }

   public async promoteChatMember(params?: Types.promoteChatMember) {
      const response = await _Request('promoteChatMember', { ...params });
      return response;
   }

   public async setChatAdministratorCustomTitle(params?: Types.setChatAdministratorCustomTitle) {
      const response = await _Request('setChatAdministratorCustomTitle', { ...params });
      return response;
   }

   public async setChatPermissions(params?: Types.setChatPermissions) {
      const response = await _Request('setChatPermissions', { ...params });
      return response;
   }

   public async exportChatInviteLink(params?: Types.exportChatInviteLink) {
      const response = await _Request('exportChatInviteLink', { ...params });
      return response;
   }

   public async createChatInviteLink(params?: Types.createChatInviteLink) {
      const response = await _Request('createChatInviteLink', { ...params });
      return response;
   }

   public async editChatInviteLink(params?: Types.editChatInviteLink) {
      const response = await _Request('editChatInviteLink', { ...params });
      return response;
   }

   public async revokeChatInviteLink(params?: Types.revokeChatInviteLink) {
      const response = await _Request('revokeChatInviteLink', { ...params });
      return response;
   }

   public async setChatPhoto(params?: Types.setChatPhoto) {
      const response = await _Request('setChatPhoto', { ...params });
      return response;
   }

   public async deleteChatPhoto(params?: Types.deleteChatPhoto) {
      const response = await _Request('deleteChatPhoto', { ...params });
      return response;
   }

   public async setChatTitle(params?: Types.setChatTitle) {
      const response = await _Request('setChatTitle', { ...params });
      return response;
   }

   public async setChatDescription(params?: Types.setChatDescription) {
      const response = await _Request('setChatDescription', { ...params });
      return response;
   }

   public async pinChatMessage(params?: Types.pinChatMessage) {
      const response = await _Request('pinChatMessage', { ...params });
      return response;
   }

   public async unpinChatMessage(params?: Types.unpinChatMessage) {
      const response = await _Request('unpinChatMessage', { ...params });
      return response;
   }

   public async unpinAllChatMessages(params?: Types.unpinAllChatMessages) {
      const response = await _Request('unpinAllChatMessages', { ...params });
      return response;
   }

   public async leaveChat(params?: Types.leaveChat) {
      const response = await _Request('leaveChat', { ...params });
      return response;
   }

   public async getChat(params?: Types.getChat) {
      const response = await _Request('getChat', { ...params });
      return response;
   }

   public async getChatAdministrators(params?: Types.getChatAdministrators) {
      const response = await _Request('getChatAdministrators', { ...params });
      return response;
   }

   public async getChatMemberCount(params?: Types.getChatMemberCount) {
      const response = await _Request('getChatMemberCount', { ...params });
      return response;
   }

   public async getChatMember(params?: Types.getChatMember) {
      const response = await _Request('getChatMember', { ...params });
      return response;
   }

   public async setChatStickerSet(params?: Types.setChatStickerSet) {
      const response = await _Request('setChatStickerSet', { ...params });
      return response;
   }

   public async deleteChatStickerSet(params?: Types.deleteChatStickerSet) {
      const response = await _Request('deleteChatStickerSet', { ...params });
      return response;
   }

   public async answerCallbackQuery(params?: Types.answerCallbackQuery) {
      const response = await _Request('answerCallbackQuery', { ...params });
      return response;
   }

   public async setMyCommands(params?: Types.setMyCommands) {
      const response = await _Request('setMyCommands', { ...params });
      return response;
   }

   public async deleteMyCommands(params?: Types.deleteMyCommands) {
      const response = await _Request('deleteMyCommands', { ...params });
      return response;
   }

   public async getMyCommands(params?: Types.getMyCommands) {
      const response = await _Request('getMyCommands', { ...params });
      return response;
   }

   public async editMessageText(params?: Types.editMessageText) {
      const response = await _Request('editMessageText', { ...params });
      return response;
   }

   public async editMessageCaption(params?: Types.editMessageCaption) {
      const response = await _Request('editMessageCaption', { ...params });
      return response;
   }

   public async editMessageMedia(params?: Types.editMessageMedia) {
      const response = await _Request('editMessageMedia', { ...params });
      return response;
   }

   public async editMessageReplyMarkup(params?: Types.editMessageReplyMarkup) {
      const response = await _Request('editMessageReplyMarkup', { ...params });
      return response;
   }

   public async stopPoll(params?: Types.stopPoll) {
      const response = await _Request('stopPoll', { ...params });
      return response;
   }

   public async deleteMessage(params?: Types.deleteMessage) {
      const response = await _Request('deleteMessage', { ...params });
      return response;
   }

   public async sendSticker(params?: Types.sendSticker) {
      const response = await _Request('sendSticker', { ...params });
      return response;
   }

   public async getStickerSet(params?: Types.getStickerSet) {
      const response = await _Request('getStickerSet', { ...params });
      return response;
   }

   public async uploadStickerFile(params?: Types.uploadStickerFile) {
      const response = await _Request('uploadStickerFile', { ...params });
      return response;
   }

   public async createNewStickerSet(params?: Types.createNewStickerSet) {
      const response = await _Request('createNewStickerSet', { ...params });
      return response;
   }

   public async addStickerToSet(params?: Types.addStickerToSet) {
      const response = await _Request('addStickerToSet', { ...params });
      return response;
   }

   public async setStickerPositionInSet(params?: Types.setStickerPositionInSet) {
      const response = await _Request('setStickerPositionInSet', { ...params });
      return response;
   }

   public async deleteStickerFromSet(params?: Types.deleteStickerFromSet) {
      const response = await _Request('deleteStickerFromSet', { ...params });
      return response;
   }

   public async setStickerSetThumb(params?: Types.setStickerSetThumb) {
      const response = await _Request('setStickerSetThumb', { ...params });
      return response;
   }

   public async answerInlineQuery(params?: Types.answerInlineQuery) {
      const response = await _Request('answerInlineQuery', { ...params });
      return response;
   }

   public async sendInvoice(params?: Types.sendInvoice) {
      const response = await _Request('sendInvoice', { ...params });
      return response;
   }

   public async answerShippingQuery(params?: Types.answerShippingQuery) {
      const response = await _Request('answerShippingQuery', { ...params });
      return response;
   }

   public async answerPreCheckoutQuery(params?: Types.answerPreCheckoutQuery) {
      const response = await _Request('answerPreCheckoutQuery', { ...params });
      return response;
   }

   public async setPassportDataErrors(params?: Types.setPassportDataErrors) {
      const response = await _Request('setPassportDataErrors', { ...params });
      return response;
   }

   public async sendGame(params?: Types.sendGame) {
      const response = await _Request('sendGame', { ...params });
      return response;
   }

   public async setGameScore(params?: Types.setGameScore) {
      const response = await _Request('setGameScore', { ...params });
      return response;
   }

   public async getGameHighScores(params?: Types.getGameHighScores) {
      const response = await _Request('getGameHighScores', { ...params });
      return response;
   }

}