'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-15 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1119';
    this._commitGIT = 'c800239ced20afc0c23fdb88f080ff878f82b066';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}