'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-16 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1860';
    this._commitGIT = '7e220e6ae92b6dcc804d30b0234d3a758dd2026d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}