'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-23 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1766';
    this._commitGIT = '71dd4ca4479132fb6911a834a7230cdf9821a617';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}