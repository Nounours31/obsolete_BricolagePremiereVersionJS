'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-21 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1880';
    this._commitGIT = '82da026928946e1038a32ac8ce3f592a37b4385d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}