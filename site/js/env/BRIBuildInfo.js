'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-17 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1618';
    this._commitGIT = '2fcf94f66086389391fcc55394ff37670627134d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}