'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-19 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-159';
    this._commitGIT = '99fc9bccf1a21f72ab0fd55becda413aec5caec5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}