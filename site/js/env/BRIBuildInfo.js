'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-01 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-699';
    this._commitGIT = 'a758cc9d16f8a689fe0fb8030d57dd929565f7d7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}