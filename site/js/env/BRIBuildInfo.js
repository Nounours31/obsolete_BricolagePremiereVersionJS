'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-19 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-285';
    this._commitGIT = '73326373eafa95b612eb6905a5e9fab9625cefdf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}