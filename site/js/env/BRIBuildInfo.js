'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-04 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1564';
    this._commitGIT = '111d3942f9475e75b2385da8c56262a4280b389f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}