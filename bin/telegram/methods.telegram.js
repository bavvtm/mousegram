"use strict";
/**
 * This File is auto Generated
 * ================================================
 * API Version    : v5.3.0
 * Changelog      : 25/6/2021
 * ================================================
 * @see https://ark0f.github.io/tg-bot-api to access json file
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = void 0;
const request_utils_1 = require("../utils/request.utils");
class Methods {
    async getUpdates(params) {
        const response = await request_utils_1._Request('getUpdates', { ...params });
        return response;
    }
    async setWebhook(params) {
        const response = await request_utils_1._Request('setWebhook', { ...params });
        return response;
    }
    async deleteWebhook(params) {
        const response = await request_utils_1._Request('deleteWebhook', { ...params });
        return response;
    }
    async getWebhookInfo(params) {
        const response = await request_utils_1._Request('getWebhookInfo', { ...params });
        return response;
    }
    async getMe(params) {
        const response = await request_utils_1._Request('getMe', { ...params });
        return response;
    }
    async logOut(params) {
        const response = await request_utils_1._Request('logOut', { ...params });
        return response;
    }
    async close(params) {
        const response = await request_utils_1._Request('close', { ...params });
        return response;
    }
    async sendMessage(params) {
        const response = await request_utils_1._Request('sendMessage', { ...params });
        return response;
    }
    async forwardMessage(params) {
        const response = await request_utils_1._Request('forwardMessage', { ...params });
        return response;
    }
    async copyMessage(params) {
        const response = await request_utils_1._Request('copyMessage', { ...params });
        return response;
    }
    async sendPhoto(params) {
        const response = await request_utils_1._Request('sendPhoto', { ...params });
        return response;
    }
    async sendAudio(params) {
        const response = await request_utils_1._Request('sendAudio', { ...params });
        return response;
    }
    async sendDocument(params) {
        const response = await request_utils_1._Request('sendDocument', { ...params });
        return response;
    }
    async sendVideo(params) {
        const response = await request_utils_1._Request('sendVideo', { ...params });
        return response;
    }
    async sendAnimation(params) {
        const response = await request_utils_1._Request('sendAnimation', { ...params });
        return response;
    }
    async sendVoice(params) {
        const response = await request_utils_1._Request('sendVoice', { ...params });
        return response;
    }
    async sendVideoNote(params) {
        const response = await request_utils_1._Request('sendVideoNote', { ...params });
        return response;
    }
    async sendMediaGroup(params) {
        const response = await request_utils_1._Request('sendMediaGroup', { ...params });
        return response;
    }
    async sendLocation(params) {
        const response = await request_utils_1._Request('sendLocation', { ...params });
        return response;
    }
    async editMessageLiveLocation(params) {
        const response = await request_utils_1._Request('editMessageLiveLocation', { ...params });
        return response;
    }
    async stopMessageLiveLocation(params) {
        const response = await request_utils_1._Request('stopMessageLiveLocation', { ...params });
        return response;
    }
    async sendVenue(params) {
        const response = await request_utils_1._Request('sendVenue', { ...params });
        return response;
    }
    async sendContact(params) {
        const response = await request_utils_1._Request('sendContact', { ...params });
        return response;
    }
    async sendPoll(params) {
        const response = await request_utils_1._Request('sendPoll', { ...params });
        return response;
    }
    async sendDice(params) {
        const response = await request_utils_1._Request('sendDice', { ...params });
        return response;
    }
    async sendChatAction(params) {
        const response = await request_utils_1._Request('sendChatAction', { ...params });
        return response;
    }
    async getUserProfilePhotos(params) {
        const response = await request_utils_1._Request('getUserProfilePhotos', { ...params });
        return response;
    }
    async getFile(params) {
        const response = await request_utils_1._Request('getFile', { ...params });
        return response;
    }
    async banChatMember(params) {
        const response = await request_utils_1._Request('banChatMember', { ...params });
        return response;
    }
    async unbanChatMember(params) {
        const response = await request_utils_1._Request('unbanChatMember', { ...params });
        return response;
    }
    async restrictChatMember(params) {
        const response = await request_utils_1._Request('restrictChatMember', { ...params });
        return response;
    }
    async promoteChatMember(params) {
        const response = await request_utils_1._Request('promoteChatMember', { ...params });
        return response;
    }
    async setChatAdministratorCustomTitle(params) {
        const response = await request_utils_1._Request('setChatAdministratorCustomTitle', { ...params });
        return response;
    }
    async setChatPermissions(params) {
        const response = await request_utils_1._Request('setChatPermissions', { ...params });
        return response;
    }
    async exportChatInviteLink(params) {
        const response = await request_utils_1._Request('exportChatInviteLink', { ...params });
        return response;
    }
    async createChatInviteLink(params) {
        const response = await request_utils_1._Request('createChatInviteLink', { ...params });
        return response;
    }
    async editChatInviteLink(params) {
        const response = await request_utils_1._Request('editChatInviteLink', { ...params });
        return response;
    }
    async revokeChatInviteLink(params) {
        const response = await request_utils_1._Request('revokeChatInviteLink', { ...params });
        return response;
    }
    async setChatPhoto(params) {
        const response = await request_utils_1._Request('setChatPhoto', { ...params });
        return response;
    }
    async deleteChatPhoto(params) {
        const response = await request_utils_1._Request('deleteChatPhoto', { ...params });
        return response;
    }
    async setChatTitle(params) {
        const response = await request_utils_1._Request('setChatTitle', { ...params });
        return response;
    }
    async setChatDescription(params) {
        const response = await request_utils_1._Request('setChatDescription', { ...params });
        return response;
    }
    async pinChatMessage(params) {
        const response = await request_utils_1._Request('pinChatMessage', { ...params });
        return response;
    }
    async unpinChatMessage(params) {
        const response = await request_utils_1._Request('unpinChatMessage', { ...params });
        return response;
    }
    async unpinAllChatMessages(params) {
        const response = await request_utils_1._Request('unpinAllChatMessages', { ...params });
        return response;
    }
    async leaveChat(params) {
        const response = await request_utils_1._Request('leaveChat', { ...params });
        return response;
    }
    async getChat(params) {
        const response = await request_utils_1._Request('getChat', { ...params });
        return response;
    }
    async getChatAdministrators(params) {
        const response = await request_utils_1._Request('getChatAdministrators', { ...params });
        return response;
    }
    async getChatMemberCount(params) {
        const response = await request_utils_1._Request('getChatMemberCount', { ...params });
        return response;
    }
    async getChatMember(params) {
        const response = await request_utils_1._Request('getChatMember', { ...params });
        return response;
    }
    async setChatStickerSet(params) {
        const response = await request_utils_1._Request('setChatStickerSet', { ...params });
        return response;
    }
    async deleteChatStickerSet(params) {
        const response = await request_utils_1._Request('deleteChatStickerSet', { ...params });
        return response;
    }
    async answerCallbackQuery(params) {
        const response = await request_utils_1._Request('answerCallbackQuery', { ...params });
        return response;
    }
    async setMyCommands(params) {
        const response = await request_utils_1._Request('setMyCommands', { ...params });
        return response;
    }
    async deleteMyCommands(params) {
        const response = await request_utils_1._Request('deleteMyCommands', { ...params });
        return response;
    }
    async getMyCommands(params) {
        const response = await request_utils_1._Request('getMyCommands', { ...params });
        return response;
    }
    async editMessageText(params) {
        const response = await request_utils_1._Request('editMessageText', { ...params });
        return response;
    }
    async editMessageCaption(params) {
        const response = await request_utils_1._Request('editMessageCaption', { ...params });
        return response;
    }
    async editMessageMedia(params) {
        const response = await request_utils_1._Request('editMessageMedia', { ...params });
        return response;
    }
    async editMessageReplyMarkup(params) {
        const response = await request_utils_1._Request('editMessageReplyMarkup', { ...params });
        return response;
    }
    async stopPoll(params) {
        const response = await request_utils_1._Request('stopPoll', { ...params });
        return response;
    }
    async deleteMessage(params) {
        const response = await request_utils_1._Request('deleteMessage', { ...params });
        return response;
    }
    async sendSticker(params) {
        const response = await request_utils_1._Request('sendSticker', { ...params });
        return response;
    }
    async getStickerSet(params) {
        const response = await request_utils_1._Request('getStickerSet', { ...params });
        return response;
    }
    async uploadStickerFile(params) {
        const response = await request_utils_1._Request('uploadStickerFile', { ...params });
        return response;
    }
    async createNewStickerSet(params) {
        const response = await request_utils_1._Request('createNewStickerSet', { ...params });
        return response;
    }
    async addStickerToSet(params) {
        const response = await request_utils_1._Request('addStickerToSet', { ...params });
        return response;
    }
    async setStickerPositionInSet(params) {
        const response = await request_utils_1._Request('setStickerPositionInSet', { ...params });
        return response;
    }
    async deleteStickerFromSet(params) {
        const response = await request_utils_1._Request('deleteStickerFromSet', { ...params });
        return response;
    }
    async setStickerSetThumb(params) {
        const response = await request_utils_1._Request('setStickerSetThumb', { ...params });
        return response;
    }
    async answerInlineQuery(params) {
        const response = await request_utils_1._Request('answerInlineQuery', { ...params });
        return response;
    }
    async sendInvoice(params) {
        const response = await request_utils_1._Request('sendInvoice', { ...params });
        return response;
    }
    async answerShippingQuery(params) {
        const response = await request_utils_1._Request('answerShippingQuery', { ...params });
        return response;
    }
    async answerPreCheckoutQuery(params) {
        const response = await request_utils_1._Request('answerPreCheckoutQuery', { ...params });
        return response;
    }
    async setPassportDataErrors(params) {
        const response = await request_utils_1._Request('setPassportDataErrors', { ...params });
        return response;
    }
    async sendGame(params) {
        const response = await request_utils_1._Request('sendGame', { ...params });
        return response;
    }
    async setGameScore(params) {
        const response = await request_utils_1._Request('setGameScore', { ...params });
        return response;
    }
    async getGameHighScores(params) {
        const response = await request_utils_1._Request('getGameHighScores', { ...params });
        return response;
    }
}
exports.Methods = Methods;
