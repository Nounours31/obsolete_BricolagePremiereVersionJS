'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-18 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1131';
    this._commitGIT = '8b7bb18d0a05a2863e5c1b59f564824497994bf0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}