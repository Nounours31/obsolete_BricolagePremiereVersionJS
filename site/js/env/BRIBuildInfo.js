'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-11 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-739';
    this._commitGIT = '060af94a1b834fd83f15157c18f56ffe513df1de';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}