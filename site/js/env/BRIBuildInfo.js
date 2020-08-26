'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-26 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1778';
    this._commitGIT = '8ea6dbad63a046486ce03b9b4ea075de870f93f6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}