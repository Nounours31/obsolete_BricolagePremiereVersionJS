'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-06 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-968';
    this._commitGIT = 'd60e145cd0fad7941762a471ffba60c91ff35911';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}