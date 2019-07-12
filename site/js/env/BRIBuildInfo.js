'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:04:19';
    this._versionBuild = 'jenkins-Bricolage-97';
    this._commitGIT = '1aa45d5df543d344decc68ffdbff92417bbac19a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}