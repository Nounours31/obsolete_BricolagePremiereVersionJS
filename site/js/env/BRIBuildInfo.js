'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-14 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-1728';
    this._commitGIT = '50a862de008d330b862fc10e1a80c609ca6bbcda';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}