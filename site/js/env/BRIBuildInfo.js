'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-06 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1454';
    this._commitGIT = '24c2ebc6a57ba77cc7b03121b64007e29106b7c3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}