'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-20 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1026';
    this._commitGIT = '91b27679e1636887e6dc5fa95a07f895f7322724';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}