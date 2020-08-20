'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-20 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1752';
    this._commitGIT = '873bb468a4ca82c24fdfff0d96e1a620be4b2221';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}