'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-07 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1334';
    this._commitGIT = '02291fc45be4444c23a3610e638d95eaafeaf28c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}