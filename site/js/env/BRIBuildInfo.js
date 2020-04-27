'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-27 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1291';
    this._commitGIT = '0856c30153fb061ae6d9c839d430d30cb9e0847c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}