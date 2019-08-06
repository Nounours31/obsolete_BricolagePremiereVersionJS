'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-06 16:00:17';
    this._versionBuild = 'jenkins-Bricolage-233';
    this._commitGIT = '5545a0d3595b7472899a630eb854327123be8cd1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}